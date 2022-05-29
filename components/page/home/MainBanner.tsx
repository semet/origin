/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import { mainBanner } from "../../../utils/slickConfig";
import { NextArrow, PrevArrow } from "../../partials/SlickArrows";

const MainBanner = () => {
	return (
		<section className="banner-part">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 order-1 order-lg-0 order-xl-0">
						<div className="row">
							<div className="col-sm-6 col-lg-12">
								<div className="home-grid-promo">
									<a href="#">
										<img src="/images/promo/home/01.jpg" alt="promo" />
									</a>
								</div>
							</div>
							<div className="col-sm-6 col-lg-12">
								<div className="home-grid-promo">
									<a href="#">
										<img src="/images/promo/home/02.jpg" alt="promo" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-8 order-0 order-lg-1 order-xl-1">
						<Slider
							{...mainBanner}
							prevArrow={<PrevArrow />}
							nextArrow={<NextArrow />}
							className="home-grid-slider slider-arrow slider-dots"
						>
							<a href="#">
								<img src="/images/home/grid/01.jpg" alt="" />
							</a>
							<a href="#">
								<img src="/images/home/grid/02.jpg" alt="" />
							</a>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainBanner;
