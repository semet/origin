/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import { CtxOrReq } from "next-auth/client/_utils";
import AuthLayout from "../../components/layouts/AuthLayout";
import { InferGetServerSidePropsType, NextPageWithLayout } from "next";
import { getProviders, getCsrfToken, getSession, signIn } from "next-auth/react";

const Login = ({
	providers,
	csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, seteErrorMessage] = useState("");

	const loginWithCredential = () => {
		signIn("credentials", {
			redirect: false,
			email: email,
			password: password,
		}).then((res: Response | undefined) => {
			if (res!.ok) {
				router.push("/");
			} else {
				toast.error("Credentials not match our record", {
					theme: "colored",
				});
				console.log(res);
			}
		});
	};
	return (
		<React.Fragment>
			<Head>
				<title>Login to Origin</title>
			</Head>
			{providers ? (
				<section className="user-form-part">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
								<div className="user-form-card">
									<div className="user-form-title">
										<h2>welcome!</h2>
										<p>Use your credentials to access</p>
									</div>
									<div className="user-form-group">
										<ul className="user-form-social">
											{providers.facebook && (
												<li>
													<a
														href="#"
														className="facebook"
														onClick={() => signIn(providers.facebook.id)}
													>
														<i className="fab fa-facebook-f" />
														login with facebook
													</a>
												</li>
											)}
											<li>
												<a href="#" className="twitter">
													<i className="fab fa-twitter" />
													login with twitter
												</a>
											</li>
											{providers.google && (
												<li>
													<a
														href="#"
														className="google"
														onClick={() => signIn(providers.google.id)}
													>
														<i className="fab fa-google" />
														login with google
													</a>
												</li>
											)}
										</ul>
										<div className="user-form-divider">
											<p>or</p>
										</div>

										<form
											className="user-form"
											method="post"
											action="/api/auth/callback/credentials"
										>
											<input
												name="csrfToken"
												type="hidden"
												defaultValue={csrfToken}
											/>
											<div className="form-group">
												<input
													type="email"
													className="form-control"
													placeholder="Enter your email"
													name="email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											<div className="form-group">
												<input
													type="password"
													className="form-control"
													placeholder="Enter your password"
													name="password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
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
												<button
													type="submit"
													onClick={(e) => {
														e.preventDefault();
														loginWithCredential();
													}}
												>
													login
												</button>
												<p>
													Forgot your password?
													<a href="reset-password.html">reset here</a>
												</p>
											</div>
										</form>
									</div>
								</div>
								<div className="user-form-remind mb-4">
									<p>
										Don't have any account?
										<a href="register.html">register here</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : null}
		</React.Fragment>
	);
};

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
	const providers = await getProviders();
	const csrfToken = await getCsrfToken(context);
	const session = await getSession(context);

	return {
		// redirect: {
		// 	destination: "/",
		// },
		props: { providers, csrfToken },
	};
};
export default Login;
