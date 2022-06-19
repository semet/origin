import React from "react";
import { ProductWithDetails } from "common";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/cart/cartSlice";

const ProductSummary: React.FC<{ product: ProductWithDetails }> = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<div className="col-lg-6">
			<div className="details-content">
				<h3 className="details-name">
					<a href="#">{product.name}</a>
				</h3>
				<div className="details-meta">
					<p>
						SKU:<span>{product.sku}</span>
					</p>
					{product.brand && (
						<p>
							BRAND:<a href="#">radhuni</a>
						</p>
					)}
				</div>
				<div className="details-rating">
					<i className="active icofont-star" />
					<i className="active icofont-star" />
					<i className="active icofont-star" />
					<i className="active icofont-star" />
					<i className="icofont-star" />
				</div>
				<h3 className="details-price">
					{product.oldPrice && (
						<del>Rp.{product.oldPrice.toLocaleString("id-ID")}</del>
					)}
					<span>Rp.{product.price.toLocaleString("id-ID")}</span>
				</h3>
				<p className="details-desc">{product.description}</p>
				<div className="details-list-group">
					<label className="details-list-title">tags:</label>
					<ul className="details-tag-list">
						<li>
							<a href="#">organic</a>
						</li>
						<li>
							<a href="#">fruits</a>
						</li>
						<li>
							<a href="#">chilis</a>
						</li>
					</ul>
				</div>
				<div className="details-list-group">
					<label className="details-list-title">Share:</label>
					<ul className="details-share-list">
						<li>
							<a href="#" className="icofont-facebook" title="Facebook" />
						</li>
						<li>
							<a href="#" className="icofont-twitter" title="Twitter" />
						</li>
						<li>
							<a href="#" className="icofont-linkedin" title="Linkedin" />
						</li>
						<li>
							<a href="#" className="icofont-instagram" title="Instagram" />
						</li>
					</ul>
				</div>
				<div className="details-add-group">
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
						<span>add to cart</span>
					</button>
				</div>
				<div className="details-action-group">
					<a className="details-wish wish" href="#" title="Add Your Wishlist">
						<i className="icofont-heart" />
						<span>add to wish</span>
					</a>
					<a
						className="details-compare"
						href="compare.html"
						title="Compare This Item"
					>
						<i className="fas fa-random" />
						<span>Compare This</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProductSummary;
