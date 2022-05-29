import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggCategoryleSidebar, toggleCart } from "../../features/menu/menuSlice";

const MobileMenu = () => {
	const dispatch = useDispatch();
	return (
		<div className="mobile-menu">
			<a href="index.html" title="Home Page">
				<i className="fas fa-home" />
				<span>Home</span>
			</a>
			<button
				className="cate-btn"
				title="Category List"
				onClick={() => dispatch(toggCategoryleSidebar())}
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
				<sup>9+</sup>
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
