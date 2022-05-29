import React from "react";

const NewsletterForm = () => {
	return (
		<section
			className="news-part"
			style={{ background: "url(images/newsletter.jpg) no-repeat center" }}
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-5 col-lg-6 col-xl-7">
						<div className="news-text">
							<h2>Get 20% Discount for Subscriber</h2>
							<p>Lorem ipsum dolor consectetur adipisicing accusantium</p>
						</div>
					</div>
					<div className="col-md-7 col-lg-6 col-xl-5">
						<form className="news-form">
							<input type="text" placeholder="Enter Your Email Address" />
							<button>
								<span>
									<i className="icofont-ui-email" />
									Subscribe
								</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsletterForm;
