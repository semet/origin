import React from "react";

const HeaderTop = () => {
	return (
		<div className="header-top">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-6">
						<div className="header-top-welcome">
							<p>Welcome to Ecomart in Your Dream Online Store!</p>
						</div>
					</div>

					<div className="col-md-12 col-lg-6">
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
