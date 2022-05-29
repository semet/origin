import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, toggleSidebar } from "../../features/menu/menuSlice";
import { RootState } from "../../features/store";

const Backdrop = () => {
	const { isCartOpen, isSidebarOpen } = useSelector((store: RootState) => store.menu);
	const dispatch = useDispatch();

	const toggleBackdrop = () => {
		isCartOpen
			? dispatch(toggleCart())
			: isSidebarOpen
			? dispatch(toggleSidebar())
			: null;
	};
	return <div className="backdrop" onClick={() => toggleBackdrop()}></div>;
};

export default Backdrop;
