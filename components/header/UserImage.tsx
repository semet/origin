import Image from "next/image";
import React from "react";

const UserImage = () => {
	return (
		<a href="login.html" className="header-widget" title="My Account">
			<Image src="/images/user.png" alt="user" width={100} height={100} />
			<span>join</span>
		</a>
	);
};

export default UserImage;
