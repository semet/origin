import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserImage = () => {
	const { data, status } = useSession();

	return (
		<React.Fragment>
			{status !== "loading" && status === "authenticated" ? (
				<Link href="/user/profile">
					<a className="header-widget" title={`Login as ${data.user?.name}`}>
						<Image
							src={
								data.user?.image
									? (data.user?.image as string)
									: "/images/avatar/icons8-user-64.png"
							}
							alt="user"
							width={70}
							height={70}
						/>
					</a>
				</Link>
			) : (
				<Link href="/auth/login">
					<a className="header-widget" title="Login">
						<Image
							src="/images/icons8-login-rounded-50.png"
							alt="user"
							width={70}
							height={70}
						/>
						<span>Login</span>
					</a>
				</Link>
			)}
		</React.Fragment>
	);
};

export default UserImage;
