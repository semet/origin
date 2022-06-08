import Link from "next/link";
import React from "react";

const LoginNotifier = () => {
	return (
		<div className="col-lg-12">
			<div className="alert-info">
				<p>
					Login First
					<Link href="/auth/login">
						<a>Click here to login</a>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginNotifier;
