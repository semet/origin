/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductPreview = () => {
	return (
		<div className="modal fade" id="product-view">
			<div className="modal-dialog">
				<div className="modal-content">
					<button className="modal-close icofont-close" data-bs-dismiss="modal" />
					<div className="product-view">
						<div className="row">
							<div className="col-md-6 col-lg-6">
								<div className="view-gallery">
									<div className="view-label-group">
										<label className="view-label new">new</label>
										<label className="view-label off">-10%</label>
									</div>
									<ul className="preview-slider slider-arrow">
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
									</ul>
									<ul className="thumb-slider">
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
										<li>
											<img src="/images/product/01.jpg" alt="product" />
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-6 col-lg-6">
								<div className="view-details">
									<h3 className="view-name">
										<a href="product-video.html">existing product name</a>
									</h3>
									<div className="view-meta">
										<p>
											SKU:<span>1234567</span>
										</p>
										<p>
											BRAND:<a href="#">radhuni</a>
										</p>
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
										<del>$38.00</del>
										<span>
											$24.00<small>/per kilo</small>
										</span>
									</h3>
									<p className="view-desc">
										Lorem ipsum dolor sit amet consectetur adipisicing elit non
										tempora magni repudiandae sint suscipit tempore quis maxime
										explicabo veniam eos reprehenderit fuga
									</p>
									<div className="view-list-group">
										<label className="view-list-title">tags:</label>
										<ul className="view-tag-list">
											<li>
												<a href="#">organic</a>
											</li>
											<li>
												<a href="#">vegetable</a>
											</li>
											<li>
												<a href="#">chilis</a>
											</li>
										</ul>
									</div>
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
											title="Compare This Item"
										>
											<i className="fas fa-random" />
											<span>Compare This</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPreview;
