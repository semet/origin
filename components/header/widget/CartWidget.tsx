import React from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../../features/menu/menuSlice";

const CartWidget = () => {
	const dispatch = useDispatch();
	return (
		<button
			className="header-widget header-cart"
			title="Cartlist"
			onClick={() => dispatch(toggleCart())}
		>
			<i className="fas fa-shopping-basket" />
			<sup>9+</sup>
			<span>
				total price<small>$345.00</small>
			</span>
		</button>
	);
};

export default CartWidget;
