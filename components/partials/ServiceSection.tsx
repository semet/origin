import React from "react";

const ServiceSection = () => {
	return (
		<section className="intro-part">
			<div className="container">
				<div className="row intro-content">
					<div className="col-sm-6 col-lg-3">
						<div className="intro-wrap">
							<div className="intro-icon">
								<i className="fas fa-truck" />
							</div>
							<div className="intro-content">
								<h5>free home delivery</h5>
								<p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-3">
						<div className="intro-wrap">
							<div className="intro-icon">
								<i className="fas fa-sync-alt" />
							</div>
							<div className="intro-content">
								<h5>instant return policy</h5>
								<p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-3">
						<div className="intro-wrap">
							<div className="intro-icon">
								<i className="fas fa-headset" />
							</div>
							<div className="intro-content">
								<h5>quick support system</h5>
								<p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-3">
						<div className="intro-wrap">
							<div className="intro-icon">
								<i className="fas fa-lock" />
							</div>
							<div className="intro-content">
								<h5>secure payment way</h5>
								<p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
