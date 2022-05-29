import Image from "next/image";
import React from "react";

const MobileMenu = () => {
	return (
		<div className="mobile-menu">
			<a href="index.html" title="Home Page">
				<i className="fas fa-home" />
				<span>Home</span>
			</a>
			<button className="cate-btn" title="Category List">
				<i className="fas fa-list" />
				<span>category</span>
			</button>
			<button className="cart-btn" title="Cartlist">
				<i className="fas fa-shopping-basket" />
				<span>cartlist</span>
				<sup>9+</sup>
			</button>
			<a href="wishlist.html" title="Wishlist">
				<i className="fas fa-heart" />
				<span>wishlist</span>
				<sup>0</sup>
			</a>
			<a href="compare.html" title="Compare List">
				<i className="fas fa-random" />
				<span>compare</span>
				<sup>0</sup>
			</a>
		</div>
	);
};

export default MobileMenu;
