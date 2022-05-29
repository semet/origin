/* eslint-disable @next/next/no-img-element */
import React from "react";

const BannerPromo = () => {
	return (
		<div className="section promo-part">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
						<div className="promo-img">
							<a href="">
								<img src="/images/promo/home/01.jpg" alt="promo" />
							</a>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
						<div className="promo-img">
							<a href="">
								<img src="/images/promo/home/02.jpg" alt="promo" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerPromo;
