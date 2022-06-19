import React from "react";
import { ProductWithDetails } from "common";

const SpecificationTab: React.FC<{ product: ProductWithDetails }> = ({ product }) => {
	return (
		<table className="table table-bordered">
			<tbody>
				<tr>
					<th scope="row">Product code</th>
					<td>SKU: {product.sku.toUpperCase()}</td>
				</tr>
				<tr>
					<th scope="row">Weight</th>
					<td>{product.weight} Gr</td>
				</tr>
				<tr>
					<th scope="row">Length</th>
					<td>{product.length} cm</td>
				</tr>
				<tr>
					<th scope="row">Width</th>
					<td>{product.width} cm</td>
				</tr>
				<tr>
					<th scope="row">Size</th>
					<td>{product.size}</td>
				</tr>
				<tr>
					<th scope="row">Color Family</th>
					<td>{product.color}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default SpecificationTab;
