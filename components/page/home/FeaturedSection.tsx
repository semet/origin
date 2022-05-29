/* eslint-disable @next/next/no-img-element */
import React from "react";

const FeaturedSection = () => {
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
					{[...Array(6)].map((product, index) => (
						<div className="col" key={index}>
							<div className="feature-card">
								<div className="feature-media">
									<div className="feature-label">
										<label className="label-text feat">feature</label>
									</div>
									<button className="feature-wish wish">
										<i className="fas fa-heart" />
									</button>
									<a className="feature-image" href="product-video.html">
										<img src="/images/product/09.jpg" alt="product" />
									</a>
									<div className="feature-widget">
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
								<div className="feature-content">
									<h6 className="feature-name">
										<a href="product-video.html">fresh organic green chilis</a>
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
										<del>$34</del>
										<span>
											$28<small>/piece</small>
										</span>
									</h6>
									<p className="feature-desc">
										Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
										amet olor ut eveniet commodi...
									</p>
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
