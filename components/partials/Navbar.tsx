import { signOut, useSession } from "next-auth/react";
import React from "react";

const Navbar = () => {
	const { status, data } = useSession();
	return (
		<nav className="navbar-part">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="navbar-content">
							<ul className="navbar-list">
								<li className="navbar-item dropdown">
									<a className="navbar-link dropdown-arrow" href="#">
										home
									</a>
									<ul className="dropdown-position-list">
										<li>
											<a href="home-grid.html">Home grid</a>
										</li>
										<li>
											<a href="index.html">Home index</a>
										</li>
										<li>
											<a href="home-classic.html">Home classic</a>
										</li>
										<li>
											<a href="home-standard.html">Home standard</a>
										</li>
										<li>
											<a href="home-category.html">Home category</a>
										</li>
									</ul>
								</li>
								<li className="navbar-item dropdown-megamenu">
									<a className="navbar-link dropdown-arrow" href="#">
										shop
									</a>
									<div className="megamenu">
										<div className="container">
											<div className="row">
												<div className="col-lg-3">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">shop pages</h5>
														<ul className="megamenu-list">
															<li>
																<a href="shop-5column.html">
																	shop 5 column
																</a>
															</li>
															<li>
																<a href="shop-4column.html">
																	shop 4 column
																</a>
															</li>
															<li>
																<a href="shop-3column.html">
																	shop 3 column
																</a>
															</li>
															<li>
																<a href="shop-2column.html">
																	shop 2 column
																</a>
															</li>
															<li>
																<a href="shop-1column.html">
																	shop 1 column
																</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col-lg-3">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">
															product pages
														</h5>
														<ul className="megamenu-list">
															<li>
																<a href="product-tab.html">
																	product single tab
																</a>
															</li>
															<li>
																<a href="product-grid.html">
																	product single grid
																</a>
															</li>
															<li>
																<a href="product-video.html">
																	product single video
																</a>
															</li>
															<li>
																<a href="product-simple.html">
																	product single simple
																</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col-lg-3">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">user action</h5>
														<ul className="megamenu-list">
															<li>
																<a href="wishlist.html">wishlist</a>
															</li>
															<li>
																<a href="compare.html">compare</a>
															</li>
															<li>
																<a href="checkout.html">checkout</a>
															</li>
															<li>
																<a href="orderlist.html">order history</a>
															</li>
															<li>
																<a href="invoice.html">order invoice</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col-lg-3">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">other pages</h5>
														<ul className="megamenu-list">
															<li>
																<a href="all-category.html">
																	all Category
																</a>
															</li>
															<li>
																<a href="brand-list.html">brand list</a>
															</li>
															<li>
																<a href="brand-single.html">
																	brand single
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="navbar-item dropdown-megamenu">
									<a className="navbar-link dropdown-arrow" href="#">
										category
									</a>
									<div className="megamenu">
										<div className="container megamenu-scroll">
											<div className="row row-cols-5">
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">vegetables</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">carrot</a>
															</li>
															<li>
																<a href="#">broccoli</a>
															</li>
															<li>
																<a href="#">asparagus</a>
															</li>
															<li>
																<a href="#">cauliflower</a>
															</li>
															<li>
																<a href="#">eggplant</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">fruits</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">Apple</a>
															</li>
															<li>
																<a href="#">orange</a>
															</li>
															<li>
																<a href="#">banana</a>
															</li>
															<li>
																<a href="#">strawberrie</a>
															</li>
															<li>
																<a href="#">watermelon</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">dairy farms</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">Butter</a>
															</li>
															<li>
																<a href="#">Cheese</a>
															</li>
															<li>
																<a href="#">Milk</a>
															</li>
															<li>
																<a href="#">Eggs</a>
															</li>
															<li>
																<a href="#">cream</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">seafoods</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">Lobster</a>
															</li>
															<li>
																<a href="#">Octopus</a>
															</li>
															<li>
																<a href="#">Shrimp</a>
															</li>
															<li>
																<a href="#">Halabos</a>
															</li>
															<li>
																<a href="#">Maeuntang</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">diet foods</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">Salmon</a>
															</li>
															<li>
																<a href="#">Avocados</a>
															</li>
															<li>
																<a href="#">Leafy Greens</a>
															</li>
															<li>
																<a href="#">Boiled Potatoes</a>
															</li>
															<li>
																<a href="#">Cottage Cheese</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">fast foods</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">burger</a>
															</li>
															<li>
																<a href="#">milkshake</a>
															</li>
															<li>
																<a href="#">sandwich</a>
															</li>
															<li>
																<a href="#">doughnut</a>
															</li>
															<li>
																<a href="#">pizza</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">drinks</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">cocktail</a>
															</li>
															<li>
																<a href="#">hard soda</a>
															</li>
															<li>
																<a href="#">shampain</a>
															</li>
															<li>
																<a href="#">Wine</a>
															</li>
															<li>
																<a href="#">barley</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">meats</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">Meatball</a>
															</li>
															<li>
																<a href="#">Sausage</a>
															</li>
															<li>
																<a href="#">Poultry</a>
															</li>
															<li>
																<a href="#">chicken</a>
															</li>
															<li>
																<a href="#">Cows</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">fishes</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">scads</a>
															</li>
															<li>
																<a href="#">pomfret</a>
															</li>
															<li>
																<a href="#">groupers</a>
															</li>
															<li>
																<a href="#">anchovy</a>
															</li>
															<li>
																<a href="#">mackerel</a>
															</li>
														</ul>
													</div>
												</div>
												<div className="col">
													<div className="megamenu-wrap">
														<h5 className="megamenu-title">dry foods</h5>
														<ul className="megamenu-list">
															<li>
																<a href="#">noodles</a>
															</li>
															<li>
																<a href="#">Powdered milk</a>
															</li>
															<li>
																<a href="#">nut &amp; yeast</a>
															</li>
															<li>
																<a href="#">almonds</a>
															</li>
															<li>
																<a href="#">pumpkin</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="navbar-item dropdown">
									<a className="navbar-link dropdown-arrow" href="#">
										pages
									</a>
									<ul className="dropdown-position-list">
										<li>
											<a href="faq.html">faqs</a>
										</li>
										<li>
											<a href="offer.html">offers</a>
										</li>
										<li>
											<a href="profile.html">my profile</a>
										</li>
										<li>
											<a href="wallet.html">my wallet</a>
										</li>
										<li>
											<a href="about.html">about us</a>
										</li>
										<li>
											<a href="contact.html">contact us</a>
										</li>
										<li>
											<a href="privacy.html">privacy policy</a>
										</li>
										<li>
											<a href="coming-soon.html">coming soon</a>
										</li>
										<li>
											<a href="blank-page.html">blank page</a>
										</li>
										<li>
											<a href="error.html">404 Error</a>
										</li>
										<li>
											<a href="email-template.html">email template</a>
										</li>
									</ul>
								</li>
								<li className="navbar-item dropdown">
									<a className="navbar-link dropdown-arrow" href="#">
										authentic
									</a>
									<ul className="dropdown-position-list">
										<li>
											<a href="login.html">login</a>
										</li>
										<li>
											<a href="register.html">register</a>
										</li>
										<li>
											<a href="reset-password.html">reset password</a>
										</li>
										<li>
											<a href="change-password.html">change password</a>
										</li>
									</ul>
								</li>
								{status !== "loading" && status === "authenticated" ? (
									<li className="navbar-item dropdown">
										<a className="navbar-link dropdown-arrow" href="#">
											User
										</a>
										<ul className="dropdown-position-list">
											<li>
												<a href="#">Order</a>
											</li>
											<li>
												<a href="#">Profile</a>
											</li>
											<li>
												<a href="#" onClick={() => signOut()}>
													Logout
												</a>
											</li>
										</ul>
									</li>
								) : null}
							</ul>
							<div className="navbar-info-group">
								<div className="navbar-info">
									<i className="icofont-ui-touch-phone" />
									<p>
										<small>call us</small>
										<span>(+880) 183 8288 389</span>
									</p>
								</div>
								<div className="navbar-info">
									<i className="icofont-ui-email" />
									<p>
										<small>email us</small>
										<span>support@greeny.com</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
