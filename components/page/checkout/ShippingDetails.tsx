import React, { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { v4 as uuidv4 } from "uuid";
import {
	MidtransParameter,
	generateOrderNumber,
	MidtransResponse,
} from "../../../utils/midtrans";
import { CartItem } from "store";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useSwr, { Fetcher } from "swr";
import { Customer, Order, OrderItem } from "@prisma/client";

const ShippingDetails = () => {
	const router = useRouter();

	const { data } = useSession();

	const { courier, deliveryCost, deliveryService, estimatedDelivery, ShippingAddress } =
		useSelector((state: RootState) => state.checkout);
	const {
		total,
		items: orderItems,
		amount,
	} = useSelector((state: RootState) => state.cart);

	const isDisabledCheckoutButton = () => {
		return (
			courier === "" ||
			deliveryCost === 0 ||
			deliveryService === "" ||
			estimatedDelivery === ""
		);
	};

	const formik = useFormik({
		initialValues: {
			termsAndCondition: false,
		},
		validationSchema: Yup.object({
			termsAndCondition: Yup.bool().oneOf([true], "Please Accept Terms & Conditions"),
		}),
		onSubmit: async (values) => {
			await handlePayment();
		},
	});

	const fetcher: Fetcher<Customer> = async () => {
		return await axios.get("/api/customer/contact").then((res) => res.data.contact);
	};
	const { data: contact } = useSwr("/api/customer/contact", fetcher);

	const deliveryDetails: CartItem = {
		id: uuidv4(),
		price: deliveryCost,
		quantity: 1,
		name: "Delivery Cost",
		createdAt: new Date(),
		weight: 0,
		sku: "",
		slug: "",
		images: [],
		oldPrice: 0,
	};

	const orderNumber = generateOrderNumber();
	const midtransParameter: MidtransParameter = {
		transaction_details: {
			order_id: orderNumber,
			gross_amount: total + deliveryCost,
		},
		credit_card: {
			secure: true,
			save_card: true,
		},
		item_details: orderItems.concat(deliveryDetails),
		customer_details: {
			first_name: contact?.name as string,
			email: contact?.email as string,
			phone: contact?.phone as string,
		},
		callbacks: {
			finish: "http://localhost:3000/shopping/success",
		},
	};

	const saveOrder = async (token: string, response: MidtransResponse) => {
		await axios
			.post("/api/order/order", {
				//Order Detail
				number: orderNumber,
				courier: courier,
				customerId: contact?.id,
				price: total,
				deliveryCost: deliveryCost,
				snapToken: token,
				shippingAddressId: ShippingAddress,
				//Order Items
				products: orderItems,
				//Order Details
				status_code: response.status_code,
				status_message: response.status_message,
				transaction_id: response.transaction_id,
				fraud_status: response.fraud_status,
				payment_type: response.payment_type,
				transaction_status: response.transaction_status,
				transaction_time: response.transaction_time,
				payment_code: response.payment_code,
				pdf_url: response.pdf_url,
				finish_redirect_url: response.finish_redirect_url,
			})
			.then((response) => console.log(response.data));
	};

	const handlePayment = async () => {
		await axios.post("/api/payment", midtransParameter).then(
			(
				res: AxiosResponse<{
					redirect_url?: string;
					token: string;
				}>
			) => {
				(window as any).snap.pay(res.data.token, {
					onSuccess: async function (response: MidtransResponse) {
						toast.success("good..");
						await saveOrder(res.data.token, response);
					},
					onPending: function (response: any) {
						toast.info("Waiting . . .");
						console.log(response);
					},
					onError: function (response: any) {
						toast.error("Error accured..");
						console.log(response);
					},
					onClose: function () {
						toast.error("You messs it up..");

						setTimeout(() => {
							router.reload();
						}, 500);
					},
				});
			}
		);
	};

	useEffect(() => {
		//change this to the script source you want to load, for example this is snap.js sandbox env
		const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
		//change this according to your client-key
		const myMidtransClientKey = process.env.MIDTRANS_CLIENT_KEY as string;

		let scriptTag = document.createElement("script");
		scriptTag.src = midtransScriptUrl;
		// optional if you want to set script attribute
		// for example snap.js have data-client-key attribute
		scriptTag.setAttribute("data-client-key", myMidtransClientKey);

		document.body.appendChild(scriptTag);
		return () => {
			document.body.removeChild(scriptTag);
		};
	}, []);

	// useEffect(() => {
	// 	console.log(contact?.id);
	// });

	return (
		<div className="col-lg-12">
			<div className="account-card mb-0">
				<div className="account-title">
					<h4>Shipping Details</h4>
				</div>
				<div className="account-content">
					<div className="row ">
						<div className="col-md-8  ">
							<table className="table table-hover shadow-sm rounded">
								<tbody>
									<tr>
										<td>Order Total</td>
										<td>Rp.{total}</td>
									</tr>
									<tr>
										<td>Delivery Cost</td>
										<td>Rp.{deliveryCost.toLocaleString("id-ID")}</td>
									</tr>
									<tr>
										<td>Courier</td>
										<td>{courier}</td>
									</tr>
									<tr>
										<td>Delivery Service</td>
										<td>{deliveryService}</td>
									</tr>
									<tr>
										<td>Estimated Delivery</td>
										<td>{`${estimatedDelivery} ${
											estimatedDelivery.toLowerCase().includes("hari")
												? ""
												: estimatedDelivery === "1"
												? "Day"
												: "Days"
										}`}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<form onSubmit={formik.handleSubmit}>
					<div className="form-check my-4">
						<input
							className={`form-check-input ${
								formik.touched.termsAndCondition &&
								formik.errors.termsAndCondition
									? "is-invalid"
									: ""
							}`}
							type="checkbox"
							name="termsAndCondition"
							id="termsAndCondition"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>

						<label htmlFor="checkout-check">
							By making this purchase you agree to our
							<a href="#">Terms and Conditions</a>.
						</label>
						{formik.touched.termsAndCondition && formik.errors.termsAndCondition ? (
							<span className="invalid-feedback">
								{formik.errors.termsAndCondition}
							</span>
						) : null}
					</div>
					<div className="checkout-proced">
						<button
							disabled={isDisabledCheckoutButton()}
							className="btn btn-inline"
							type="submit"
						>
							proceed to checkout
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ShippingDetails;
