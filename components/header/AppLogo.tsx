import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppLogo = () => {
	return (
		<Link href="/">
			<a className="header-logo">
				<Image src="/images/logo.png" alt="logo" width={270} height={100} />
			</a>
		</Link>
	);
};

export default AppLogo;
