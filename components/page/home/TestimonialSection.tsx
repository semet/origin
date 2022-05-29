/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Slider from "react-slick";
import { testimonialSlider } from "../../../utils/slickConfig";
import { NextArrow, PrevArrow } from "../../partials/SlickArrows";

const TestimonialSection = () => {
	return (
		<section className="section testimonial-part">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-heading">
							<h2>client's feedback</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<Slider
							{...testimonialSlider}
							nextArrow={<NextArrow />}
							prevArrow={<PrevArrow />}
							className="testimonial-slider slider-arrow"
						>
							{[...Array(10)].map((testimonial, index) => (
								<div className="testimonial-card" key={index}>
									<i className="fas fa-quote-left" />
									<p>
										Lorem ipsum dolor consectetur adipisicing elit neque earum
										sapiente vitae obcaecati magnam doloribus magni provident
										ipsam
									</p>
									<h5>mahmud hasan</h5>
									<ul>
										<li className="fas fa-star" />
										<li className="fas fa-star" />
										<li className="fas fa-star" />
										<li className="fas fa-star" />
										<li className="fas fa-star" />
									</ul>
									<img src="/images/avatar/01.jpg" alt="testimonial" />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialSection;
