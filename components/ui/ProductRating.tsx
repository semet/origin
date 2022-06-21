import React, { Fragment } from "react";
import { useRating } from "../../utils/getRating";

const ProductRating: React.FC<{ productId: string }> = ({ productId }) => {
	const { rating, plainRating, roundedRating } = useRating(productId);

	return (
		<Fragment>
			{rating !== undefined && rating.length > 0
				? Array(roundedRating)
						.fill(0)
						.map((_, index) => <i className="active icofont-star" key={index} />)
				: null}
			{rating !== undefined && rating.length > 0
				? Array(5 - roundedRating)
						.fill(0)
						.map((_, index) => <i className="icofont-star" key={index} />)
				: Array(5)
						.fill(0)
						.map((_, index) => <i className="icofont-star" key={index} />)}
			<a href="#">({roundedRating})</a>
		</Fragment>
	);
};

export default ProductRating;
