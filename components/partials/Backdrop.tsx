import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleCart,
	toggleMobileSidebar,
	toggCategoryleSidebar,
} from "../../features/menu/menuSlice";
import { RootState } from "../../features/store";

const Backdrop = () => {
	const { isCartOpen, isCategorySidebarOpen, isMobileSidebarOpen } = useSelector(
		(store: RootState) => store.menu
	);
	const dispatch = useDispatch();

	const toggleBackdrop = () => {
		isCartOpen
			? dispatch(toggleCart())
			: isCategorySidebarOpen
			? dispatch(toggCategoryleSidebar())
			: isMobileSidebarOpen
			? dispatch(toggleMobileSidebar())
			: null;
	};
	return <div className="backdrop" onClick={() => toggleBackdrop()}></div>;
};

export default Backdrop;
