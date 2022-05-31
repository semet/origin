/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import { ProductWithDetails } from "common";
import { newItems } from "../../../utils/slickConfig";
import { NextArrow, PrevArrow } from "../../partials/SlickArrows";
import { setSelectedProduct } from "../../../features/product/productSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

type Props = {
	products: ProductWithDetails[];
};
const NewItemSection: React.FC<Props> = ({ products }) => {
	const dispatch: Dispatch<any> = useDispatch();
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
							{products.map((product, index) => (
								<li key={index}>
									<div className="product-card shadow-sm">
										<div className="product-media">
											<div className="product-label">
												<label className="label-text new">new</label>
												{product.isDiscounted && (
													<label className="label-text off">
														-{product.discount}%
													</label>
												)}
											</div>
											<button className="product-wish wish">
												<i className="fas fa-heart" />
											</button>
											<a className="product-image" href="product-video.html">
												<img src={product.images[0].name} alt="product" />
											</a>
											<div className="product-widget">
												<a
													title="Make an offer"
													href="#"
													className="fas fa-random"
												/>
												<a
													title="Product View"
													href="#"
													className="fas fa-eye"
													data-bs-toggle="modal"
													data-bs-target="#product-view"
													onClick={() =>
														dispatch(setSelectedProduct(product.id))
													}
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
												<a href="product-video.html">{product.name}</a>
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
