/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItem, increaseItem, removeItem } from "../../features/cart/cartSlice";
import { toggleCart } from "../../features/menu/menuSlice";
import { RootState } from "../../features/store";

const CartSidebar = () => {
	const dispatch = useDispatch();
	const { isCartOpen } = useSelector((state: RootState) => state.menu);
	const { amount, items, total } = useSelector((state: RootState) => state.cart);

	return (
		<aside className={`cart-sidebar ${isCartOpen ? "active" : ""}`}>
			<div className="cart-header">
				<div className="cart-total">
					<i className="fas fa-shopping-basket" />
					<span>
						total {amount >= 2 ? "items" : "item"} ({amount})
					</span>
				</div>
				<button className="cart-close" onClick={() => dispatch(toggleCart())}>
					<i className="icofont-close" />
				</button>
			</div>

			<ul className="cart-list">
				{items.map((item, index) => (
					<li className="cart-item" key={index}>
						<div className="cart-media">
							<a href="#">
								<img src={item.images[0].name} alt="product" />
							</a>
							<button
								className="cart-delete"
								onClick={() => dispatch(removeItem(item))}
							>
								<i className="far fa-trash-alt" />
							</button>
						</div>
						<div className="cart-info-group">
							<div className="cart-info">
								<h6>
									<a href="product-single.html">{item.name}</a>
								</h6>
								<p>Unit Price - Rp.{item.price.toLocaleString("id-ID")}</p>
							</div>
							<div className="cart-action-group">
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
										readOnly
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
								<h6>Rp.{(item.price * item.quantity).toLocaleString("id-ID")}</h6>
							</div>
						</div>
					</li>
				))}
			</ul>

			<div className="cart-footer">
				{total !== 0 && amount !== 0 ? (
					<Link href="/shopping/checkout">
						<a className="cart-checkout-btn">
							<span className="checkout-label">Proceed to Checkout</span>
							<span className="checkout-price">
								Rp.{total.toLocaleString("id-ID")}
							</span>
						</a>
					</Link>
				) : null}
			</div>
		</aside>
	);
};

export default CartSidebar;
