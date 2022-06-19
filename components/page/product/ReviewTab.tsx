/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProductReviewWithUser } from "common";

const ReviewTab: React.FC<{ reviews: ProductReviewWithUser[] }> = ({ reviews }) => {
	return (
		<ul className="review-list">
			{reviews.map((review, index) => (
				<li className="review-item" key={index}>
					<div className="review-media">
						<a className="review-avatar" href="#">
							<img src="/images/avatar/01.jpg" alt="review" />
						</a>
						<h5 className="review-meta">
							<a href="#">{review.customer.name}</a>
							<span>{new Date(review.createdAt).toDateString()}</span>
						</h5>
					</div>
					<p className="review-desc">{review.comment}</p>
				</li>
			))}
		</ul>
	);
};

export default ReviewTab;
