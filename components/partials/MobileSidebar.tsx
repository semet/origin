import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileSidebar } from "../../features/menu/menuSlice";
import { RootState } from "../../features/store";

const MobileSidebar = () => {
	const dispatch = useDispatch();
	const { isMobileSidebarOpen } = useSelector((state: RootState) => state.menu);
	return (
		<aside className={`nav-sidebar ${isMobileSidebarOpen ? "active" : ""}`}>
			<div className="nav-header">
				<a href="#">
					<Image src="/images/logo.png" alt="logo" width={270} height={100} />
				</a>
				<button className="nav-close" onClick={() => dispatch(toggleMobileSidebar())}>
					<i className="icofont-close" />
				</button>
			</div>
			<div className="nav-content">
				<div className="nav-btn">
					<a href="login.html" className="btn btn-inline">
						<i className="fa fa-unlock-alt" />
						<span>join here</span>
					</a>
				</div>
				{/* This commentable code show when user login or register */}
				{/* <div class="nav-profile">
               <a class="nav-user" href="#"><img src="images/user.png" alt="user"></a>
               <h4 class="nav-name"><a href="profile.html">Miron Mahmud</a></h4>
           </div> */}
				<ul className="nav-list">
					<li>
						<a className="nav-link dropdown-link" href="#">
							<i className="icofont-home" />
							Home
						</a>
						<ul className="dropdown-list">
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
					<li>
						<a className="nav-link dropdown-link" href="#">
							<i className="icofont-food-cart" />
							shop
						</a>
						<ul className="dropdown-list">
							<li>
								<a href="shop-5column.html">shop 5 column</a>
							</li>
							<li>
								<a href="shop-4column.html">shop 4 column</a>
							</li>
							<li>
								<a href="shop-3column.html">shop 3 column</a>
							</li>
							<li>
								<a href="shop-2column.html">shop 2 column</a>
							</li>
							<li>
								<a href="shop-1column.html">shop 1 column</a>
							</li>
						</ul>
					</li>
					<li>
						<a className="nav-link dropdown-link" href="#">
							<i className="icofont-page" />
							product
						</a>
						<ul className="dropdown-list">
							<li>
								<a href="product-tab.html">product tab</a>
							</li>
							<li>
								<a href="product-grid.html">product grid</a>
							</li>
							<li>
								<a href="product-video.html">product video</a>
							</li>
							<li>
								<a href="product-simple.html">product simple</a>
							</li>
						</ul>
					</li>
					<li>
						<a className="nav-link dropdown-link" href="#">
							<i className="icofont-bag-alt" />
							my account
						</a>
						<ul className="dropdown-list">
							<li>
								<a href="profile.html">profile</a>
							</li>
							<li>
								<a href="wallet.html">wallet</a>
							</li>
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
							<li>
								<a href="email-template.html">email template</a>
							</li>
						</ul>
					</li>
					<li>
						<a className="nav-link dropdown-link" href="#">
							<i className="icofont-lock" />
							authentic
						</a>
						<ul className="dropdown-list">
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
					<li>
						<a className="nav-link dropdown-link" href="#">
							<i className="icofont-book-alt" />
							blogs
						</a>
						<ul className="dropdown-list">
							<li>
								<a href="blog-grid.html">blog grid</a>
							</li>
							<li>
								<a href="blog-standard.html">blog standard</a>
							</li>
							<li>
								<a href="blog-details.html">blog details</a>
							</li>
							<li>
								<a href="blog-author.html">blog author</a>
							</li>
						</ul>
					</li>
					<li>
						<a className="nav-link" href="offer.html">
							<i className="icofont-sale-discount" />
							offers
						</a>
					</li>
					<li>
						<a className="nav-link" href="about.html">
							<i className="icofont-info-circle" />
							about us
						</a>
					</li>
					<li>
						<a className="nav-link" href="faq.html">
							<i className="icofont-support-faq" />
							need help
						</a>
					</li>
					<li>
						<a className="nav-link" href="contact.html">
							<i className="icofont-contacts" />
							contact us
						</a>
					</li>
					<li>
						<a className="nav-link" href="privacy.html">
							<i className="icofont-warning" />
							privacy policy
						</a>
					</li>
					<li>
						<a className="nav-link" href="coming-soon.html">
							<i className="icofont-options" />
							coming soon
						</a>
					</li>
					<li>
						<a className="nav-link" href="error.html">
							<i className="icofont-ui-block" />
							404 error
						</a>
					</li>
					<li>
						<a className="nav-link" href="login.html">
							<i className="icofont-logout" />
							logout
						</a>
					</li>
				</ul>
				<div className="nav-info-group">
					<div className="nav-info">
						<i className="icofont-ui-touch-phone" />
						<p>
							<small>call us</small>
							<span>(+880) 183 8288 389</span>
						</p>
					</div>
					<div className="nav-info">
						<i className="icofont-ui-email" />
						<p>
							<small>email us</small>
							<span>support@greeny.com</span>
						</p>
					</div>
				</div>
				<div className="nav-footer">
					<p>
						All Rights Reserved by <a href="#">Mironcoder</a>
					</p>
				</div>
			</div>
		</aside>
	);
};

export default MobileSidebar;
