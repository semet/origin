import React from "react";
import Image from "next/image";
import { RootState } from "../../features/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileSidebar, toggleSearch } from "../../features/menu/menuSlice";

const HeaderMedia = () => {
	const dispatch = useDispatch();
	const { isSearchOpen } = useSelector((state: RootState) => state.menu);
	return (
		<div className="header-media-group">
			<button className="header-menu" onClick={() => dispatch(toggleMobileSidebar())}>
				<i className="icofont-navigation-menu"></i>
			</button>
			<a href="index.html">
				<Image src="/images/logo.png" alt="logo" width={270} height={70} />
			</a>
			<button className="header-src" onClick={() => dispatch(toggleSearch())}>
				{isSearchOpen ? (
					<i className="fas fa-times" />
				) : (
					<i className="fas fa-search" />
				)}
			</button>
		</div>
	);
};

export default HeaderMedia;
