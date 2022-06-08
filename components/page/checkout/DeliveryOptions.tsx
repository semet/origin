import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import useSwr, { Fetcher } from "swr";
import axios from "axios";
import { Courier } from ".prisma/client";

const DeliveryOptions = () => {
	const fetcher: Fetcher<Courier[]> = async (url: string) => {
		return await axios.get(url).then((response) => {
			console.log(response.data);
			return response.data.couriers;
		});
	};

	const { data: couriers } = useSwr("/api/ongkir/courier", fetcher);

	const formik = useFormik({
		initialValues: {
			courier: 0,
		},
		validationSchema: Yup.object({
			courier: Yup.mixed().required().min(1, "Province is required"),
		}),
		onSubmit: async (values) => {},
	});

	const handleCourierChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		formik.setFieldValue(e.target.name, e.target.value);
		const provinceId = e.target.value;
	};
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
								<div className="form-group">
									<label htmlFor="courier">Select Courier</label>
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
										<option value={0}>Selet Courier</option>
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
				</div>
			</div>
		</div>
	);
};

export default DeliveryOptions;
