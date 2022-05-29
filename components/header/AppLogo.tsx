import Image from "next/image";
import React from "react";

const AppLogo = () => {
	return (
		<a href="index.html" className="header-logo">
			<Image src="/images/logo.png" alt="logo" width={270} height={100} />
		</a>
	);
};

export default AppLogo;
