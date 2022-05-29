import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserImage = () => {
	return (
		<Link href="/auth/login">
			<a className="header-widget" title="My Account">
				<Image src="/images/user.png" alt="user" width={100} height={100} />
				<span>join</span>
			</a>
		</Link>
	);
};

export default UserImage;
