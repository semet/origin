/* eslint-disable @next/next/no-img-element */
import { CategoryAndCount } from "common";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { categorySlider } from "../../../utils/slickConfig";
import { NextArrow, PrevArrow } from "../../partials/SlickArrows";

type Props = {
	categories: CategoryAndCount[];
};

const CategorySection: React.FC<Props> = ({ categories }) => {
	return (
		<section className="section suggest-part">
			<div className="container">
				<Slider
					{...categorySlider}
					prevArrow={<PrevArrow />}
					nextArrow={<NextArrow />}
					className="suggest-slider slider-arrow"
				>
					{categories.map((category, index) => (
						<li key={index}>
							<a className="suggest-card" href="shop-4column.html">
								<img src="/images/suggest/01.jpg" alt="suggest" />
								<h5>
									{category.name} <span>{category._count.products} items</span>
								</h5>
							</a>
						</li>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default CategorySection;
