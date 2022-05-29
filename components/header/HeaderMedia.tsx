import Image from "next/image";
import React from "react";

const HeaderMedia = () => {
	return (
		<div className="header-media-group">
			<button className="header-user">
				<Image src="/images/user.png" alt="user" width={40} height={40} />
			</button>
			<a href="index.html">
				<Image src="/images/logo.png" alt="logo" width={270} height={70} />
			</a>
			<button className="header-src">
				<i className="fas fa-search" />
			</button>
		</div>
	);
};

export default HeaderMedia;
