/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import { newItems } from "../../../utils/slickConfig";
import { NextArrow, PrevArrow } from "../../partials/SlickArrows";

const NewItemSection = () => {
	return (
		<section className="section newitem-part">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="section-heading">
							<h2>collected new items</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Slider
							{...newItems}
							nextArrow={<NextArrow />}
							prevArrow={<PrevArrow />}
							className="new-slider slider-arrow"
						>
							{[...Array(10)].map((product, index) => (
								<li key={index}>
									<div className="product-card">
										<div className="product-media">
											<div className="product-label">
												<label className="label-text new">new</label>
											</div>
											<button className="product-wish wish">
												<i className="fas fa-heart" />
											</button>
											<a className="product-image" href="product-video.html">
												<img src="/images/product/15.jpg" alt="product" />
											</a>
											<div className="product-widget">
												<a
													title="Product Compare"
													href="compare.html"
													className="fas fa-random"
												/>
												<a
													title="Product Video"
													href="https://youtu.be/9xzcVxSBbG8"
													className="venobox fas fa-play"
													data-autoplay="true"
													data-vbtype="video"
												/>
												<a
													title="Product View"
													href="#"
													className="fas fa-eye"
													data-bs-toggle="modal"
													data-bs-target="#product-view"
												/>
											</div>
										</div>
										<div className="product-content">
											<div className="product-rating">
												<i className="active icofont-star" />
												<i className="active icofont-star" />
												<i className="active icofont-star" />
												<i className="active icofont-star" />
												<i className="icofont-star" />
												<a href="product-video.html">(3)</a>
											</div>
											<h6 className="product-name">
												<a href="product-video.html">fresh green chilis</a>
											</h6>
											<h6 className="product-price">
												<del>$34</del>
												<span>
													$28<small>/piece</small>
												</span>
											</h6>
											<button className="product-add" title="Add to Cart">
												<i className="fas fa-shopping-basket" />
												<span>add</span>
											</button>
											<div className="product-action">
												<button
													className="action-minus"
													title="Quantity Minus"
												>
													<i className="icofont-minus" />
												</button>
												<input
													className="action-input"
													title="Quantity Number"
													type="text"
													name="quantity"
													defaultValue={1}
												/>
												<button className="action-plus" title="Quantity Plus">
													<i className="icofont-plus" />
												</button>
											</div>
										</div>
									</div>
								</li>
							))}
						</Slider>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="section-btn-25">
							<a href="shop-4column.html" className="btn btn-outline">
								<i className="fas fa-eye" />
								<span>show more</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewItemSection;
