import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../features/menu/menuSlice";
import { RootState } from "../../../features/store";

const CartWidget = () => {
	const dispatch = useDispatch();
	const { total, amount } = useSelector((state: RootState) => state.cart);
	return (
		<button
			className="header-widget header-cart"
			title="Cartlist"
			onClick={() => dispatch(toggleCart())}
		>
			<i className="fas fa-shopping-basket" />
			<sup>{amount}</sup>
			<span>
				total price<small>Rp.{total.toLocaleString("id-ID")}</small>
			</span>
		</button>
	);
};

export default CartWidget;
