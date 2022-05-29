import React, { useEffect, useState } from "react";
import AppLogo from "./AppLogo";
import HeaderMedia from "./HeaderMedia";
import HeaderWidget from "./HeaderWidget";
import SearchForm from "./SearchForm";
import UserImage from "./UserImage";

const MainHeader = () => {
	const [activeHeader, setActiveHeader] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 60) {
				setActiveHeader(true);
			} else {
				setActiveHeader(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header className={`header-part ${activeHeader ? "active" : ""}`}>
			<div className="container">
				<div className="header-content">
					{/* Header Media group */}
					<HeaderMedia />
					{/* Mobile header end */}
					{/* Logo */}
					<AppLogo />
					{/* User Image */}
					<UserImage />
					{/* Search Form */}
					<SearchForm />
					{/* Header Widget */}
					<HeaderWidget />
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
