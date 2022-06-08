/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItem, increaseItem, removeItem } from "../../../features/cart/cartSlice";
import { RootState } from "../../../features/store";

const OrderItems = () => {
	const dispatch = useDispatch();
	const { items } = useSelector((state: RootState) => state.cart);
	return (
		<div className="col-lg-12">
			<div className="account-card">
				<div className="account-title">
					<h4>Your order</h4>
				</div>
				<div className="account-content">
					<div className="table-scroll">
						<table className="table-list">
							<thead>
								<tr>
									<th scope="col">SKU</th>
									<th scope="col">Image</th>
									<th scope="col">Name</th>
									<th scope="col">Price</th>
									<th scope="col">Quantity</th>
									<th scope="col">Total</th>
									<th scope="col">action</th>
								</tr>
							</thead>
							<tbody>
								{items.map((item, index) => (
									<tr key={index}>
										<td className="table-serial">
											<h6>{item.sku.toUpperCase()}</h6>
										</td>
										<td className="table-image">
											<img
												src={item.images[0].name}
												alt={item.slug}
												title={item.slug}
											/>
										</td>
										<td className="table-name">
											<h6>{item.name}</h6>
										</td>
										<td className="table-price">
											<h6>Rp.{item.price.toLocaleString("id-ID")}</h6>
										</td>

										<td className="table-quantity">
											<div className="product-action">
												<button
													className="action-minus"
													title="Quantity Minus"
													onClick={() => {
														item.quantity === 1
															? dispatch(removeItem(item))
															: dispatch(decreaseItem(item));
													}}
												>
													<i className="icofont-minus" />
												</button>
												<input
													className="action-input"
													title="Quantity Number"
													type="text"
													name="quantity"
													disabled
													value={item.quantity}
												/>
												<button
													className="action-plus"
													title="Quantity Plus"
													onClick={() => dispatch(increaseItem(item))}
												>
													<i className="icofont-plus" />
												</button>
											</div>
										</td>
										<td className="table-brand">
											<h6>
												Rp.
												{(item.quantity * item.price).toLocaleString("id-ID")}
											</h6>
										</td>
										<td className="table-action">
											<a
												className="view"
												href="#"
												title="Quick View"
												data-bs-toggle="modal"
												data-bs-target="#product-view"
											>
												<i className="fas fa-eye" />
											</a>
											<a className="trash" href="#" title="Remove Wishlist">
												<i className="icofont-trash" />
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="chekout-coupon">
						<button className="coupon-btn">Do you have a coupon code?</button>
						<form className="coupon-form">
							<input type="text" placeholder="Enter your coupon code" />
							<button type="submit">
								<span>apply</span>
							</button>
						</form>
					</div>
					<div className="checkout-charge">
						<ul>
							<li>
								<span>Sub total</span>
								<span>$267.45</span>
							</li>
							<li>
								<span>delivery fee</span>
								<span>$10.00</span>
							</li>
							<li>
								<span>discount</span>
								<span>$00.00</span>
							</li>
							<li>
								<span>
									Total<small>(Incl. VAT)</small>
								</span>
								<span>$277.00</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderItems;
