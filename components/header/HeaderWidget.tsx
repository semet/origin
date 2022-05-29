import React from "react";
import CartWidget from "./widget/CartWidget";
import WishlistWidget from "./widget/WishlistWidget";

const HeaderWidget = () => {
	return (
		<div className="header-widget-group">
			<WishlistWidget />
			<CartWidget />
		</div>
	);
};

export default HeaderWidget;
