import { NextPageWithLayout } from "next";
import Head from "next/head";
import React, { ReactElement } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";

const Login: NextPageWithLayout = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Origin: Login</title>
			</Head>
			<div className="user-form-card">
				<div className="user-form-title">
					<h2>welcome!</h2>
					<p>Use your credentials to access</p>
				</div>
				<div className="user-form-group">
					<ul className="user-form-social">
						<li>
							<a href="#" className="facebook">
								<i className="fab fa-facebook-f" />
								login with facebook
							</a>
						</li>
						<li>
							<a href="#" className="twitter">
								<i className="fab fa-twitter" />
								login with twitter
							</a>
						</li>
						<li>
							<a href="#" className="google">
								<i className="fab fa-google" />
								login with google
							</a>
						</li>
						{/* <li>
							<a href="#" className="instagram">
								<i className="fab fa-instagram" />
								login with instagram
							</a>
						</li> */}
					</ul>
					<div className="user-form-divider">
						<p>or</p>
					</div>
					<form className="user-form">
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								placeholder="Enter your email"
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								placeholder="Enter your password"
							/>
						</div>
						<div className="form-check mb-3">
							<input
								className="form-check-input"
								type="checkbox"
								defaultValue=""
								id="check"
							/>
							<label className="form-check-label" htmlFor="check">
								Remember Me
							</label>
						</div>
						<div className="form-button">
							<button type="submit">login</button>
							<p>
								Forgot your password?
								<a href="reset-password.html">reset here</a>
							</p>
						</div>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;
export default Login;
