import React from "react";
import { ProductWithDetails } from "common";

const DescriptionTab: React.FC<{ description: ProductWithDetails["details"] }> = ({
	description,
}) => {
	return (
		<div className="tab-descrip">
			<p>{description}</p>
		</div>
	);
};

export default DescriptionTab;
