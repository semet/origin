import { Customer } from "@prisma/client";
import axios from "axios";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";
import * as Yup from "yup";

const ReviewForm: React.FC<{ productId: string }> = ({ productId }) => {
	const { status } = useSession();

	const formik = useFormik({
		initialValues: {
			body: "",
		},
		validationSchema: Yup.object({
			body: Yup.string()
				.required("Please provide a review")
				.min(10, "Review must be at least 10 characters long"),
		}),
		onSubmit: async (values) => {
			await handleSubmitReviews(values);
		},
	});

	const handleSubmitReviews = async ({ body }: { body: string }) => {
		await axios
			.post("/api/product/save-review", {
				review: body,
				productId: productId,
			})
			.then((response) => {
				console.log(response.data.message);
				mutate("fetchProductReviews");
				toast.success(response.data.message);
				formik.resetForm();
			});
	};

	const handleRate = async (rating: string) => {
		await axios
			.post("/api/product/rate", {
				rating: rating,
				productId: productId,
			})
			.then((response) => {
				console.log(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<form className="review-form" onSubmit={formik.handleSubmit}>
			<div className="row">
				<div className="col-lg-12">
					<div className="star-rating">
						{[1, 2, 3, 4, 5].reverse().map((val, index) => (
							<Fragment key={index}>
								<input
									type="radio"
									name="rating"
									id={`star-${index}`}
									value={val}
									onClick={(e) => handleRate(e.currentTarget.value)}
								/>
								<label htmlFor={`star-${index}`} />
							</Fragment>
						))}
					</div>
				</div>
				<div className="col-lg-12">
					<div className="form-group">
						<textarea
							className={`form-control ${
								formik.touched.body && formik.errors.body ? "is-invalid" : ""
							}`}
							disabled={status !== "authenticated"}
							placeholder={`${
								status !== "authenticated"
									? "Login to write review"
									: "Write review"
							}`}
							name="body"
							id="body"
							value={formik.values.body}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.body && formik.errors.body ? (
							<span className="invalid-feedback">{formik.errors.body}</span>
						) : null}
					</div>
				</div>
				<div className="col-lg-12">
					<button className="btn btn-inline" type="submit">
						<i className="icofont-water-drop" />
						<span>drop your review</span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default ReviewForm;
