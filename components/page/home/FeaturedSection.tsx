/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDispatch } from "react-redux";
import { ProductWithDetails } from "common";
import { Dispatch } from "@reduxjs/toolkit";
import { setSelectedProduct } from "../../../features/product/productSlice";
import { isNewProduct } from "../../../utils/common";

type Props = {
	products: ProductWithDetails[];
};
const FeaturedSection: React.FC<Props> = ({ products }) => {
	const dispatch: Dispatch<any> = useDispatch();
	return (
		<section className="section feature-part">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-heading">
							<h2>our featured items</h2>
						</div>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
					{products.map((product, index) => (
						<div className="col" key={index}>
							<div className="feature-card shadow-sm">
								<div className="feature-media">
									<div className="feature-label">
										{product.isDiscounted ? (
											<label className="view-label off">
												-{product.discount}%
											</label>
										) : null}

										{isNewProduct(product) && (
											<label className="view-label new">New</label>
										)}
										<label className="label-text feat">feature</label>
									</div>
									<button className="feature-wish wish">
										<i className="fas fa-heart" />
									</button>
									<a className="feature-image" href="product-video.html">
										<img src={product.images[0].name} alt="product" />
									</a>
									<div className="feature-widget">
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
											onClick={() => dispatch(setSelectedProduct(product.id))}
										/>
									</div>
								</div>
								<div className="feature-content">
									<h6 className="feature-name">
										<a href="product-video.html">{product.name}</a>
									</h6>
									<div className="feature-rating">
										<i className="active icofont-star" />
										<i className="active icofont-star" />
										<i className="active icofont-star" />
										<i className="active icofont-star" />
										<i className="icofont-star" />
										<a href="product-video.html">(3 Reviews)</a>
									</div>
									<h6 className="feature-price">
										{product.isDiscounted && (
											<del>
												Rp. {product.oldPrice?.toLocaleString("id-ID")}
											</del>
										)}

										<span>Rp.{product.price.toLocaleString("id-ID")}</span>
									</h6>
									<p className="feature-desc">{product.description}</p>
									<button className="product-add" title="Add to Cart">
										<i className="fas fa-shopping-basket" />
										<span>add</span>
									</button>
									<div className="product-action">
										<button className="action-minus" title="Quantity Minus">
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
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedSection;
