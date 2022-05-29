import React from "react";

const HeaderTop = () => {
	return (
		<div className="header-top">
			<div className="container">
				<div className="row d-flex justify-content-between">
					<div className="col-md-6 col-lg-5">
						<div className="header-top-welcome">
							<p>Welcome to Ecomart in Your Dream Online Store!</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 content-end">
						<ul className="header-top-list">
							<li>
								<a href="offer.html">offers</a>
							</li>
							<li>
								<a href="faq.html">need help</a>
							</li>
							<li>
								<a href="contact.html">contact us</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
