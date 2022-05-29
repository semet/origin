/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../features/menu/menuSlice";
import { RootState } from "../../features/store";

const CartSidebar = () => {
	const dispatch = useDispatch();
	const { isCartOpen } = useSelector((state: RootState) => state.menu);
	return (
		<aside className={`cart-sidebar ${isCartOpen ? "active" : ""}`}>
			<div className="cart-header">
				<div className="cart-total">
					<i className="fas fa-shopping-basket" />
					<span>total item (5)</span>
				</div>
				<button className="cart-close" onClick={() => dispatch(toggleCart())}>
					<i className="icofont-close" />
				</button>
			</div>
			<ul className="cart-list">
				<li className="cart-item">
					<div className="cart-media">
						<a href="#">
							<img src="/images/product/01.jpg" alt="product" />
						</a>
						<button className="cart-delete">
							<i className="far fa-trash-alt" />
						</button>
					</div>
					<div className="cart-info-group">
						<div className="cart-info">
							<h6>
								<a href="product-single.html">existing product name</a>
							</h6>
							<p>Unit Price - $8.75</p>
						</div>
						<div className="cart-action-group">
							<div className="product-action">
								<button className="action-minus" title="Quantity Minus">
									<i className="icofont-minus" />
								</button>
								<input
									className="action-input"
									title="Quantity Number"
									type="text"
									name="quantity"
								/>
								<button className="action-plus" title="Quantity Plus">
									<i className="icofont-plus" />
								</button>
							</div>
							<h6>$56.98</h6>
						</div>
					</div>
				</li>
				<li className="cart-item">
					<div className="cart-media">
						<a href="#">
							<img src="/images/product/02.jpg" alt="product" />
						</a>
						<button className="cart-delete">
							<i className="far fa-trash-alt" />
						</button>
					</div>
					<div className="cart-info-group">
						<div className="cart-info">
							<h6>
								<a href="product-single.html">existing product name</a>
							</h6>
							<p>Unit Price - $8.75</p>
						</div>
						<div className="cart-action-group">
							<div className="product-action">
								<button className="action-minus" title="Quantity Minus">
									<i className="icofont-minus" />
								</button>
								<input
									className="action-input"
									title="Quantity Number"
									type="text"
									name="quantity"
								/>
								<button className="action-plus" title="Quantity Plus">
									<i className="icofont-plus" />
								</button>
							</div>
							<h6>$56.98</h6>
						</div>
					</div>
				</li>
				<li className="cart-item">
					<div className="cart-media">
						<a href="#">
							<img src="/images/product/03.jpg" alt="product" />
						</a>
						<button className="cart-delete">
							<i className="far fa-trash-alt" />
						</button>
					</div>
					<div className="cart-info-group">
						<div className="cart-info">
							<h6>
								<a href="product-single.html">existing product name</a>
							</h6>
							<p>Unit Price - $8.75</p>
						</div>
						<div className="cart-action-group">
							<div className="product-action">
								<button className="action-minus" title="Quantity Minus">
									<i className="icofont-minus" />
								</button>
								<input
									className="action-input"
									title="Quantity Number"
									type="text"
									name="quantity"
								/>
								<button className="action-plus" title="Quantity Plus">
									<i className="icofont-plus" />
								</button>
							</div>
							<h6>$56.98</h6>
						</div>
					</div>
				</li>
				<li className="cart-item">
					<div className="cart-media">
						<a href="#">
							<img src="/images/product/04.jpg" alt="product" />
						</a>
						<button className="cart-delete">
							<i className="far fa-trash-alt" />
						</button>
					</div>
					<div className="cart-info-group">
						<div className="cart-info">
							<h6>
								<a href="product-single.html">existing product name</a>
							</h6>
							<p>Unit Price - $8.75</p>
						</div>
						<div className="cart-action-group">
							<div className="product-action">
								<button className="action-minus" title="Quantity Minus">
									<i className="icofont-minus" />
								</button>
								<input
									className="action-input"
									title="Quantity Number"
									type="text"
									name="quantity"
									defaultValue={1}
								/>
								<button className="action-plus" title="Quantity Plus">
									<i className="icofont-plus" />
								</button>
							</div>
							<h6>$56.98</h6>
						</div>
					</div>
				</li>
				<li className="cart-item">
					<div className="cart-media">
						<a href="#">
							<img src="/images/product/05.jpg" alt="product" />
						</a>
						<button className="cart-delete">
							<i className="far fa-trash-alt" />
						</button>
					</div>
					<div className="cart-info-group">
						<div className="cart-info">
							<h6>
								<a href="product-single.html">existing product name</a>
							</h6>
							<p>Unit Price - $8.75</p>
						</div>
						<div className="cart-action-group">
							<div className="product-action">
								<button className="action-minus" title="Quantity Minus">
									<i className="icofont-minus" />
								</button>
								<input
									className="action-input"
									title="Quantity Number"
									type="text"
									name="quantity"
									defaultValue={1}
								/>
								<button className="action-plus" title="Quantity Plus">
									<i className="icofont-plus" />
								</button>
							</div>
							<h6>$56.98</h6>
						</div>
					</div>
				</li>
			</ul>
			<div className="cart-footer">
				<button className="coupon-btn">Do you have a coupon code?</button>
				<form className="coupon-form">
					<input type="text" placeholder="Enter your coupon code" />
					<button type="submit">
						<span>apply</span>
					</button>
				</form>
				<Link href="/shopping/checkout">
					<a className="cart-checkout-btn">
						<span className="checkout-label">Proceed to Checkout</span>
						<span className="checkout-price">$369.78</span>
					</a>
				</Link>
			</div>
		</aside>
	);
};

export default CartSidebar;
