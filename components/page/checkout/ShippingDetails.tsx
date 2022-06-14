import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";

const ShippingDetails = () => {
	const { courier, deliveryCost, deliveryService, estimatedDelivery } = useSelector(
		(state: RootState) => state.checkout
	);
	const { total } = useSelector((state: RootState) => state.cart);
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
				<div className="checkout-check">
					<input type="checkbox" id="checkout-check" />
					<label htmlFor="checkout-check">
						By making this purchase you agree to our
						<a href="#">Terms and Conditions</a>.
					</label>
				</div>
				<div className="checkout-proced">
					<a href="invoice.html" className="btn btn-inline">
						proceed to checkout
					</a>
				</div>
			</div>
		</div>
	);
};

export default ShippingDetails;
