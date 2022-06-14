import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import type { CustomerAccount } from "common";
import { toast } from "react-toastify";
import { mutate } from "swr";

const DeliveryAddressForm: React.FC<{}> = () => {
	const [provinces, setProvinces] = useState<Array<any>>([]);
	const [cities, setCities] = useState<Array<any>>([]);
	const modalCloseButton = useRef<HTMLButtonElement>(null);
	const formik = useFormik({
		initialValues: {
			provinceId: 0,
			cityId: 0,
			zipCode: "",
			addressLine1: "",
			addressLine2: "",
		},
		validationSchema: Yup.object({
			provinceId: Yup.number().required().min(1, "Province is required"),
			cityId: Yup.number().required().min(1, "City is required"),
			zipCode: Yup.string().required("Zip Code is required"),
			addressLine1: Yup.string().required("Address Line 1 is required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			const response = await axios.post("/api/address", values);
			if (response.status === 200) {
				toast.success("Address added successfully", {
					position: "bottom-center",
				});
				modalCloseButton.current?.click();
				mutate("/api/customer/delivery-address");
				resetForm();
			}
		},
	});

	const handleProvinceChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		formik.setFieldValue(e.target.name, e.target.value);
		const provinceId = e.target.value;
		try {
			const cities = await axios.get(`/api/cities?provinceId=${provinceId}`);
			setCities(cities.data.cities);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		axios
			.get("/api/province")
			.then((response) => {
				setProvinces(response.data.provinces);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="modal fade" id="deliveryAddressAdd">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<button
						className="modal-close"
						data-bs-dismiss="modal"
						ref={modalCloseButton}
					>
						<i className="icofont-close" />
					</button>
					<form className="modal-form" onSubmit={formik.handleSubmit}>
						<div className="form-title">
							<h3>add new contact</h3>
						</div>
						<div className="form-group">
							<label htmlFor="provinceId" className="form-label">
								Province
							</label>
							<select
								id="provinceId"
								name="provinceId"
								onChange={handleProvinceChange}
								onBlur={formik.handleBlur}
								value={formik.values.provinceId}
								className={`form-select ${
									formik.touched.provinceId && formik.errors.provinceId
										? "is-invalid"
										: ""
								}`}
							>
								<option value={0}>choose title</option>

								{provinces.map((province, index) => (
									<option value={province.province_id} key={index}>
										{province.province}
									</option>
								))}
							</select>
							{formik.touched.provinceId && formik.errors.provinceId ? (
								<span className="invalid-feedback">
									{formik.errors.provinceId}
								</span>
							) : null}
						</div>
						<div className="form-group">
							<label htmlFor="cityId" className="form-label">
								City
							</label>
							<select
								id="cityId"
								name="cityId"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.cityId}
								className={`form-select ${
									formik.touched.cityId && formik.errors.cityId
										? "is-invalid"
										: ""
								}`}
							>
								<option value={0}>
									{cities.length === 0 && !formik.errors.cityId
										? "Select Province first"
										: "Select city"}
								</option>

								{cities.map((city, index) => (
									<option value={city.city_id} key={index}>
										{city.city_name}
									</option>
								))}
							</select>
							{formik.touched.zipCode && formik.errors.zipCode ? (
								<span className="invalid-feedback">{formik.errors.zipCode}</span>
							) : null}
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="zipCode">
								ZIP code
							</label>
							<input
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.zipCode}
								className={`form-control ${
									formik.touched.zipCode && formik.errors.zipCode
										? "is-invalid"
										: ""
								}`}
								id="zipCode"
								type="text"
								placeholder="Enter ZIP Code"
							/>
							{formik.touched.cityId && formik.errors.cityId ? (
								<span className="invalid-feedback">{formik.errors.cityId}</span>
							) : null}
						</div>

						<div className="form-group">
							<label className="form-label" htmlFor="addressLine1">
								Address Line 1
							</label>
							<textarea
								id="addressLine1"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.addressLine1}
								className={`form-control ${
									formik.touched.addressLine1 && formik.errors.addressLine1
										? "is-invalid"
										: ""
								}`}
								style={{ height: "80px" }}
							></textarea>
							{formik.touched.addressLine1 && formik.errors.addressLine1 ? (
								<span className="invalid-feedback">
									{formik.errors.addressLine1}
								</span>
							) : null}
						</div>

						<div className="form-group">
							<label className="form-label" htmlFor="addressLine2">
								Address Line 2
							</label>
							<textarea
								id="addressLine2"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.addressLine2}
								className="form-control "
								style={{ height: "80px" }}
							></textarea>
						</div>
						<button className="form-btn" type="submit">
							save contact info
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default DeliveryAddressForm;
