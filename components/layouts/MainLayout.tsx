import { useRouter } from "next/router";
import React, { FC, Fragment, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleCart,
	toggleCategoryleSidebar,
	toggleMobileSidebar,
} from "../../features/menu/menuSlice";
import { RootState } from "../../features/store";
import HeaderTop from "../header/HeaderTop";
import MainHeader from "../header/MainHeader";
import AppFooter from "../partials/AppFooter";
import Backdrop from "../partials/Backdrop";
import BackTopButton from "../partials/BackTopButton";
import CartSidebar from "../partials/CartSidebar";
import MobileCategorySidebar from "../partials/MobileCategorySidebar";
import MobileMenu from "../partials/MobileMenu";
import MobileSidebar from "../partials/MobileSidebar";
import Navbar from "../partials/Navbar";
import NewsletterForm from "../partials/NewsletterForm";
import ProductPreview from "../partials/ProductPreview";
import ServiceSection from "../partials/ServiceSection";

const MainLayout: FC<{ children?: ReactNode }> = ({ children }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { isCartOpen, isCategorySidebarOpen, isMobileSidebarOpen } = useSelector(
		(store: RootState) => store.menu
	);
	useEffect(() => {
		const handleRouteChange = () => {
			return isCartOpen
				? dispatch(toggleCart())
				: isMobileSidebarOpen
				? dispatch(toggleMobileSidebar())
				: isCategorySidebarOpen
				? dispatch(toggleCategoryleSidebar)
				: null;
		};

		router.events.on("routeChangeStart", handleRouteChange);
		document.body.style.overflow =
			isCartOpen || isCategorySidebarOpen || isMobileSidebarOpen ? "hidden" : "";

		return () => {
			router.events.on("routeChangeStart", handleRouteChange);
		};
	}, [dispatch, isCartOpen, isCategorySidebarOpen, isMobileSidebarOpen, router.events]);
	return (
		<Fragment>
			{/* Back to top */}
			<BackTopButton />
			{/* Backdrop*/}
			{isCartOpen || isCategorySidebarOpen || isMobileSidebarOpen ? (
				<Backdrop />
			) : null}
			{/* Header Top side */}
			<HeaderTop />
			{/* Main Header  */}
			<MainHeader />
			{/* Main Navbar */}
			<Navbar />
			{/* Mobile Sidebar */}
			<MobileCategorySidebar />
			{/* Cart Sidebar */}
			<CartSidebar />
			{/* Mobile menu sidebar */}
			<MobileSidebar />
			{/* Mobile Media group */}
			<MobileMenu />
			{/* Product preview popup */}
			<ProductPreview />
			{children}
			{/* News Letter form */}
			<NewsletterForm />
			{/* Our Service */}
			<ServiceSection />
			{/* Footer */}
			<AppFooter />
		</Fragment>
	);
};

export default MainLayout;
