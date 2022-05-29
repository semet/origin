import React, { FC, Fragment, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
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
	const { isCartOpen, isSidebarOpen } = useSelector((store: RootState) => store.menu);
	useEffect(() => {
		document.body.style.overflow = isCartOpen || isSidebarOpen ? "hidden" : "";
	});
	return (
		<Fragment>
			{/* Back to top */}
			<BackTopButton />
			{/* Backdrop*/}
			{isCartOpen || isSidebarOpen ? <Backdrop /> : null}
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
