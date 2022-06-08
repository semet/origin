import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryleSidebar, toggleCart } from "../../features/menu/menuSlice";
import { RootState } from "../../features/store";

const MobileMenu = () => {
	const dispatch = useDispatch();
	const { amount } = useSelector((state: RootState) => state.cart);
	return (
		<div className="mobile-menu">
			<a href="index.html" title="Home Page">
				<i className="fas fa-home" />
				<span>Home</span>
			</a>
			<button
				className="cate-btn"
				title="Category List"
				onClick={() => dispatch(toggleCategoryleSidebar())}
			>
				<i className="fas fa-list" />
				<span>category</span>
			</button>
			<button
				className="cart-btn"
				title="Cartlist"
				onClick={() => dispatch(toggleCart())}
			>
				<i className="fas fa-shopping-basket" />
				<span>cartlist</span>
				<sup>{amount}</sup>
			</button>
			<a href="wishlist.html" title="Wishlist">
				<i className="fas fa-heart" />
				<span>wishlist</span>
				<sup>0</sup>
			</a>
			<a href="#" title="Compare List">
				<i className="fas fa-user" />
				<span>User</span>
			</a>
		</div>
	);
};

export default MobileMenu;
