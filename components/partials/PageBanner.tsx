import React from "react";

const PageBanner = () => {
	return (
		<section
			className="inner-section single-banner"
			style={{ background: "url(/images/single-banner.jpg) no-repeat center" }}
		>
			<div className="container">
				<h2>checkout</h2>
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<a href="index.html">Home</a>
					</li>
					<li className="breadcrumb-item">
						<a href="shop-4column.html">shop grid</a>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						checkout
					</li>
				</ol>
			</div>
		</section>
	);
};

export default PageBanner;
