/* eslint-disable @next/next/no-img-element */
import React from "react";

const MixedStatus = () => {
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
									<span>top rating</span>
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
						{[...Array(10)].map((product, index) => (
							<div className="col" key={index}>
								<div className="product-card">
									<div className="product-media">
										<div className="product-label">
											<label className="label-text order">314</label>
										</div>
										<button className="product-wish wish">
											<i className="fas fa-heart" />
										</button>
										<a className="product-image" href="product-video.html">
											<img src="/images/product/01.jpg" alt="product" />
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
				<div className="tab-pane fade" id="top-rate">
					<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
						{[...Array(10)].map((product, index) => (
							<div className="col" key={index}>
								<div className="product-card">
									<div className="product-media">
										<div className="product-label">
											<label className="label-text rate">4.8</label>
										</div>
										<button className="product-wish wish">
											<i className="fas fa-heart" />
										</button>
										<a className="product-image" href="product-video.html">
											<img src="/images/product/11.jpg" alt="product" />
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
				<div className="tab-pane fade" id="top-disc">
					<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
						{[...Array(10)].map((product, index) => (
							<div className="col" key={index}>
								<div className="product-card">
									<div className="product-media">
										<div className="product-label">
											<label className="label-text off">-10%</label>
										</div>
										<button className="product-wish wish">
											<i className="fas fa-heart" />
										</button>
										<a className="product-image" href="product-video.html">
											<img src="/images/product/06.jpg" alt="product" />
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
