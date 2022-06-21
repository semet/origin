/* eslint-disable @next/next/no-img-element */
import { Dispatch } from "@reduxjs/toolkit";
import { ProductWithDetails } from "common";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/cart/cartSlice";
import { setSelectedProduct } from "../../../features/product/productSlice";
import { useRating } from "../../../utils/getRating";
import ProductRating from "../../ui/ProductRating";

type Props = {
	products: ProductWithDetails[];
};

const ProductSaleSection: React.FC<Props> = ({ products }) => {
	const dispatch: Dispatch<any> = useDispatch();

	return (
		<section className="section recent-part">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-heading">
							<h2>Product On Sale</h2>
						</div>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
					{products.map((product, index) => (
						<div className="col" key={index}>
							<div className="product-card shadow-sm">
								<div className="product-media">
									<div className="product-label">
										<label className="label-text sale">sale</label>
									</div>
									<button className="product-wish wish">
										<i className="fas fa-heart" />
									</button>
									<a className="product-image" href="product-video.html">
										<img src={product.images[0].name} alt="product" />
									</a>
									<div className="product-widget">
										<a
											title="Product Compare"
											href="compare.html"
											className="fas fa-share"
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
								<div className="product-content">
									<div className="product-rating">
										<ProductRating productId={product.id} />
									</div>
									<h6 className="product-name">
										<Link href={`/product/${product.id}`}>
											<a>{product.name}</a>
										</Link>
									</h6>
									<h6 className="product-price">
										<del>{product.oldPrice}</del>
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

export default ProductSaleSection;
