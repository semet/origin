/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC, ReactNode } from "react";

const AuthLayout: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<section className="user-form-part">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
						<div className="user-form-logo">
							<Link href="/">
								<a>
									<img src="/images/logo.png" alt="logo" />
								</a>
							</Link>
						</div>
						{children}
						<div className="user-form-remind">
							<p>
								Don't have any account?<a href="register.html">register here</a>
							</p>
						</div>
						<div className="user-form-footer">
							<p>Origin | © Copyright by Mollusca</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AuthLayout;
