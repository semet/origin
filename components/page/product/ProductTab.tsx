/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { ProductReviewWithUser, ProductWithDetails } from "common";
import DescriptionTab from "./DescriptionTab";
import SpecificationTab from "./SpecificationTab";
import ReviewTab from "./ReviewTab";
import ReviewForm from "./ReviewForm";
import useSWR, { Fetcher } from "swr";
import { ProductReview } from "@prisma/client";
import axios from "axios";

const ProductTab: React.FC<{ product: ProductWithDetails }> = ({ product }) => {
	const fetcher: Fetcher<ProductReviewWithUser[]> = async () => {
		return await axios
			.get(`/api/product/reviews?productId=${product.id}`)
			.then((response) => response.data.reviews);
	};
	const { data: reviews } = useSWR("fetchProductReviews", fetcher);
	return (
		<Fragment>
			<div className="row">
				<div className="col-lg-12">
					<ul className="nav nav-tabs shadow-sm">
						<li>
							<a href="#tab-desc" className="tab-link active" data-bs-toggle="tab">
								descriptions
							</a>
						</li>
						<li>
							<a href="#tab-spec" className="tab-link" data-bs-toggle="tab">
								Specifications
							</a>
						</li>
						<li>
							<a href="#tab-reve" className="tab-link" data-bs-toggle="tab">
								reviews ({reviews?.length})
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="tab-pane fade show active shadow-sm" id="tab-desc">
				<div className="row">
					<div className="col-lg-12">
						<div className="product-details-frame">
							<DescriptionTab description={product.details} />
						</div>
					</div>
				</div>
			</div>
			<div className="tab-pane fade shadow-sm" id="tab-spec">
				<div className="row">
					<div className="col-lg-12">
						<div className="product-details-frame">
							<SpecificationTab product={product} />
						</div>
					</div>
				</div>
			</div>
			<div className="tab-pane fade shadow-sm" id="tab-reve">
				<div className="row">
					<div className="col-lg-12">
						<div className="product-details-frame">
							{reviews !== undefined && reviews.length > 0 ? (
								<ReviewTab reviews={reviews} />
							) : (
								<h5>No Review</h5>
							)}
						</div>
						<div className="product-details-frame">
							<h3 className="frame-title">add your review</h3>
							<ReviewForm productId={product.id} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ProductTab;
