/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProductWithDetails } from "common";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../../features/product/productSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { addItem } from "../../../features/cart/cartSlice";

type Props = Record<"sales" | "features" | "mostLiked", ProductWithDetails[]>;

const MixedStatus: React.FC<Props> = (props) => {
	const dispatch: Dispatch<any> = useDispatch();
	const { sales, features, mostLiked } = props;
	return (
		<section className="section niche-part">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-heading">
							<h2>Browse by Mixed Status</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<ul className="nav nav-tabs">
							<li>
								<a
									href="#top-order"
									className="tab-link active"
									data-bs-toggle="tab"
								>
									<i className="icofont-price" />
									<span>top order</span>
								</a>
							</li>
							<li>
								<a href="#top-rate" className="tab-link" data-bs-toggle="tab">
									<i className="icofont-star" />
									<span>most liked</span>
								</a>
							</li>
							<li>
								<a href="#top-disc" className="tab-link" data-bs-toggle="tab">
									<i className="icofont-sale-discount" />
									<span>top discount</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="tab-pane fade show active" id="top-order">
					<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
						{features.map((product, index) => (
							<div className="col" key={index}>
								<div className="product-card shadow-sm">
									<div className="product-media">
										<div className="product-label">
											<label className="label-text order">
												{product.sold} Sold
											</label>
											{product.isDiscounted && (
												<label className="label-text off">
													-{product.discount} %
												</label>
											)}
										</div>
										<button className="product-wish wish">
											<i className="fas fa-heart" />
										</button>
										<a className="product-image" href="product-video.html">
											<img src={product.images[0].name} alt={product.slug} />
										</a>
										<div className="product-widget">
											<a
												title="Make an Offer"
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
										</div>
										<h6 className="product-name">
											<a href="product-video.html">{product.name}</a>
										</h6>
										<h6 className="product-price">
											{product.oldPrice && (
												<del>
													Rp.{product.oldPrice.toLocaleString("id-ID")}
												</del>
											)}
											<span>Rp.{product.price.toLocaleString("id-ID")}</span>
										</h6>
										<button
											className="product-add"
											title="Add to Cart"
											onClick={() =>
												dispatch(
													addItem({
														...product,
														quantity: 1,
													})
												)
											}
										>
											<i className="fas fa-shopping-basket" />
											<span>add</span>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="tab-pane fade" id="top-rate">
					<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
						{mostLiked.map((product, index) => (
							<div className="col" key={index}>
								<div className="product-card shadow-sm">
									<div className="product-media">
										<div className="product-label">
											<label className="label-text rate">
												{product.like} Likes
											</label>
											{product.isDiscounted && (
												<label className="label-text off">
													-{product.discount} %
												</label>
											)}
										</div>
										<button className="product-wish wish">
											<i className="fas fa-heart" />
										</button>
										<a className="product-image" href="product-video.html">
											<img src={product.images[0].name} alt={product.slug} />
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
										</div>
										<h6 className="product-name">
											<a href="#">{product.name}</a>
										</h6>
										<h6 className="product-price">
											{product.oldPrice && (
												<del>
													Rp.{product.oldPrice.toLocaleString("id-ID")}
												</del>
											)}
											<span>Rp.{product.price.toLocaleString("id-ID")}</span>
										</h6>
										<button
											className="product-add"
											title="Add to Cart"
											onClick={() =>
												dispatch(
													addItem({
														...product,
														quantity: 1,
													})
												)
											}
										>
											<i className="fas fa-shopping-basket" />
											<span>add</span>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="tab-pane fade" id="top-disc">
					<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
						{sales.map((product, index) => (
							<div className="col" key={index}>
								<div className="product-card shadow-sm">
									<div className="product-media">
										<div className="product-label">
											<label className="label-text off">
												-{product.discount}%
											</label>
										</div>
										<button className="product-wish wish">
											<i className="fas fa-heart" />
										</button>
										<a className="product-image" href="product-video.html">
											<img src={product.images[0].name} alt={product.slug} />
										</a>
										<div className="product-widget">
											<a
												title="Make an offer"
												href="compare.html"
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
										</div>
										<h6 className="product-name">
											<a href="product-video.html">{product.name}</a>
										</h6>
										<h6 className="product-price">
											{product.oldPrice && (
												<del>
													Rp.{product.oldPrice.toLocaleString("id-ID")}
												</del>
											)}
											<span>Rp.{product.price.toLocaleString("id-ID")}</span>
										</h6>
										<button
											className="product-add"
											title="Add to Cart"
											onClick={() =>
												dispatch(
													addItem({
														...product,
														quantity: 1,
													})
												)
											}
										>
											<i className="fas fa-shopping-basket" />
											<span>add</span>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
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

export default MixedStatus;
