/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import { brandSlider } from "../../../utils/slickConfig";
import { NextArrow, PrevArrow } from "../../partials/SlickArrows";

const BrandSection = () => {
	return (
		<section className="section brand-part">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-heading">
							<h2>shop by brands</h2>
						</div>
					</div>
				</div>
				<Slider
					{...brandSlider}
					nextArrow={<NextArrow />}
					prevArrow={<PrevArrow />}
					className="brand-slider slider-arrow"
				>
					{[...Array(10)].map((brand, index) => (
						<div className="brand-wrap" key={index}>
							<div className="brand-media">
								<img src="/images/brand/01.jpg" alt="brand" />
								<div className="brand-overlay">
									<a href="brand-single.html">
										<i className="fas fa-link" />
									</a>
								</div>
							</div>
							<div className="brand-meta">
								<h4>natural greeny</h4>
								<p>(45 items)</p>
							</div>
						</div>
					))}
				</Slider>
				<div className="row">
					<div className="col-lg-12">
						<div className="section-btn-50">
							<a href="brand-list.html" className="btn btn-outline">
								<i className="fas fa-eye" />
								<span>view all brands</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrandSection;
