import { Product } from "@prisma/client";
export const isNewProduct = (product: Product) => {
	const releaseDate = new Date(product.createdAt);
	const currentDate = new Date();
	const difference = currentDate.getTime() - releaseDate.getTime();
	const days = Math.ceil(difference / (1000 * 3600 * 24));
	return days <= 14;
};
