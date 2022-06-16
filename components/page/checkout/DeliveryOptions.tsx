import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import useSwr, { Fetcher } from "swr";
import axios from "axios";
import { Courier } from ".prisma/client";
import { RajaOngkirService } from "common";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../features/store";
import { useListener } from "react-bus";
import { toast } from "react-toastify";
import {
	setCourier,
	setDeliveryCost,
	setDeliveryService,
	setEstimatedDelivery,
} from "../../../features/checkout/checkoutSlice";

const DeliveryOptions = () => {
	const dispatch = useDispatch();
	const [cardIndex, setCardIndex] = useState(-1);
	//event bus received from DeliveryAddress Component to reset  the result after address change
	const resetResult = useListener("addressChanged", () => {
		formik.resetForm();
		setExpeditionServices([]);
		setCardIndex(-1);
	});
	const [expeditionServices, setExpeditionServices] = useState<
		RajaOngkirService["costs"]
	>([]);
	const { isPending, cityDestination } = useSelector(
		(state: RootState) => state.checkout
	);

	const fetcher: Fetcher<Courier[]> = async (url: string) => {
		return await axios.get(url).then((response) => {
			return response.data.couriers;
		});
	};

	const { data: couriers } = useSwr("/api/ongkir/courier", fetcher);

	const formik = useFormik({
		initialValues: {
			courier: "",
			deliveryService: 0,
		},
		validationSchema: Yup.object({
			courier: Yup.string().required("Province is required"),
		}),
		onSubmit: async (values) => {},
	});

	const handleCourierChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		formik.setFieldValue(e.target.name, e.target.value);
		const courier = e.target.value;
		await axios
			.post("/api/ongkir/service", {
				destination: cityDestination,
				weight: 20,
				courier: courier,
			})
			.then((response) => {
				setExpeditionServices(response.data.costs);
				dispatch(setCourier(response.data.name));
				//reset previous service
				dispatch(setDeliveryCost(0));
				dispatch(setDeliveryService(""));
				dispatch(setEstimatedDelivery(""));
				setCardIndex(-1);
				// console.log(response.data);
			})
			.catch((err) => {
				toast.error(`${err.message} Please try again`, {
					position: "top-center",
				});
			});
	};

	const handleSelectedService = (
		description: string,
		cost: number,
		estimated: string
	) => {
		dispatch(setDeliveryCost(cost));
		dispatch(setDeliveryService(description));
		dispatch(setEstimatedDelivery(estimated));
	};

	useEffect(() => {
		resetResult;
	}, [resetResult]);

	return (
		<div className="col-lg-12">
			<div className="account-card">
				<div className="account-title">
					<h4>delivery options</h4>
				</div>
				<div className="account-content">
					<form onSubmit={formik.handleSubmit}>
						<div className="row">
							<div className="col-md-6">
								<div className="mb-3">
									<label htmlFor="courier" className="form-label">
										Select Courier
									</label>
									<select
										name="courier"
										id="courier"
										onChange={handleCourierChange}
										onBlur={formik.handleBlur}
										value={formik.values.courier}
										className={`form-select ${
											formik.touched.courier && formik.errors.courier
												? "is-invalid"
												: ""
										}`}
									>
										<option value="">Select Courier</option>
										{couriers?.map((cr, index) => (
											<option value={cr.code} key={index}>
												{cr.title}
											</option>
										))}
									</select>
									{formik.touched.courier && formik.errors.courier ? (
										<span className="invalid-feedback">
											{formik.errors.courier}
										</span>
									) : null}
								</div>
							</div>
						</div>
					</form>
					<div className="row">
						{expeditionServices.map((type, index) => (
							<div
								className="col-md-6 col-lg-4 "
								key={index}
								onClick={() =>
									handleSelectedService(
										type.description,
										type.cost[0].value,
										type.cost[0].etd
									)
								}
							>
								<div
									className={`profile-card address ${
										cardIndex === index ? "active" : ""
									}`}
									onClick={() => {
										setCardIndex(index);
									}}
								>
									<h6>{type.description}</h6>
									<p>{`Cost: Rp.${type.cost[0].value}`}</p>
									<p>{`Estimated Day: ${type.cost[0].etd}`}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryOptions;
