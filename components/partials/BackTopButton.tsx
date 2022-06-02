import React, { useEffect, useState } from "react";

const BackTopButton = () => {
	const [showScrollTop, setShowScrollTop] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowScrollTop(true);
			} else {
				setShowScrollTop(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	return showScrollTop ? <a className="backtop fas fa-arrow-up" href="#"></a> : null;
};

export default BackTopButton;
