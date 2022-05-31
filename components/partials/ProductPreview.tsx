/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { RootState } from "../../features/store";
import { isNewProduct } from "../../utils/common";
import React, { useEffect, useState } from "react";
import { NextArrow, PrevArrow } from "./SlickArrows";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedProduct } from "../../features/product/productSlice";
import { productPreview, productPreviewThumb } from "../../utils/slickConfig";

const ProductPreview = () => {
	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
	const dispatch = useDispatch();
	const { isError, isLoading, errorMessage, product } = useSelector(
		(state: RootState) => state.currentProduct
	);

	useEffect(() => {
		if (isError) {
			toast.error(errorMessage);
		}
	}, [isError, errorMessage]);
	return (
		<div
			className="modal fade"
			id="product-view"
			data-backdrop="static"
			role="dialog"
			aria-labelledby="staticBackdropLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				{isLoading ? (
					"Loading . . . ."
				) : product !== undefined ? (
					<div className="modal-content">
						<button
							className="modal-close icofont-close"
							data-bs-dismiss="modal"
							onClick={() => dispatch(clearSelectedProduct())}
						/>
						<div className="product-view">
							<div className="row">
								<div className="col-md-6 col-lg-6">
									<div className="view-gallery">
										<div className="view-label-group">
											{isNewProduct(product) && (
												<label className="view-label new">New</label>
											)}
											{isNewProduct(product)}
											{product.isDiscounted ? (
												<label className="view-label off">
													-{product.discount}%
												</label>
											) : null}
										</div>
										<Slider
											{...productPreview}
											asNavFor={nav2}
											ref={(slider1) => setNav1(slider1 as any)}
											prevArrow={<PrevArrow />}
											nextArrow={<NextArrow />}
											className="preview-slider slider-arrow"
										>
											{product.images.map((image, index) => (
												<li key={index}>
													<Image
														src={image.name}
														alt="product"
														width={450}
														height={450}
													/>
												</li>
											))}
										</Slider>
										<Slider
											{...productPreviewThumb}
											asNavFor={nav1}
											ref={(slider2) => setNav2(slider2 as any)}
											className="thumb-slider"
										>
											{product.images.map((image, index) => (
												<li key={index}>
													<img src={image.name} alt="product" />
												</li>
											))}
										</Slider>
									</div>
								</div>
								<div className="col-md-6 col-lg-6">
									<div className="view-details">
										<h3 className="view-name">
											<a href="product-video.html">{product?.name}</a>
										</h3>
										<div className="view-meta">
											<p>
												SKU:<span>{product.sku}</span>
											</p>
											{product.brand !== null && (
												<p>
													BRAND:<a href="#">{product.brand}</a>
												</p>
											)}
										</div>
										<div className="view-rating">
											<i className="active icofont-star" />
											<i className="active icofont-star" />
											<i className="active icofont-star" />
											<i className="active icofont-star" />
											<i className="icofont-star" />
											<a href="product-video.html">(3 reviews)</a>
										</div>
										<h3 className="view-price">
											{product.oldPrice !== null && (
												<del>
													Rp.{product.oldPrice.toLocaleString("id-ID")}
												</del>
											)}

											<span>Rp.{product.price.toLocaleString("id-ID")}</span>
										</h3>
										<p className="view-desc">{product.description}</p>
										<div className="view-list-group">
											<label className="view-list-title">Share:</label>
											<ul className="view-share-list">
												<li>
													<a
														href="#"
														className="icofont-facebook"
														title="Facebook"
													/>
												</li>
												<li>
													<a
														href="#"
														className="icofont-twitter"
														title="Twitter"
													/>
												</li>
												<li>
													<a
														href="#"
														className="icofont-linkedin"
														title="Linkedin"
													/>
												</li>
												<li>
													<a
														href="#"
														className="icofont-instagram"
														title="Instagram"
													/>
												</li>
											</ul>
										</div>
										<div className="view-add-group">
											<button className="product-add" title="Add to Cart">
												<i className="fas fa-shopping-basket" />
												<span>add to cart</span>
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
										<div className="view-action-group">
											<a
												className="view-wish wish"
												href="#"
												title="Add Your Wishlist"
											>
												<i className="icofont-heart" />
												<span>add to wish</span>
											</a>
											<a
												className="view-compare"
												href="compare.html"
												title="Make an offer"
											>
												<i className="fas fa-share" />
												<span>Bargain</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ProductPreview;
