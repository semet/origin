import useSWR, { Fetcher } from "swr";
import axios from "axios";
import { ProductRating } from "@prisma/client";
export const useRating = (productId: string) => {
	const fetcher: Fetcher<ProductRating[]> = async () => {
		return await axios
			.get(`/api/product/rating?productId=${productId}`)
			.then((response) => response.data.ratings);
	};
	const { data } = useSWR(`fetchRating/${productId}`, fetcher);

	const plainRating =
		data !== undefined
			? data.map((r) => r.rating).reduce((a, b) => a + b, 0) / data.length
			: 0;
	const roundedRating =
		data !== undefined && data.length > 0 ? Math.round(plainRating) : 0;

	return {
		rating: data,
		plainRating,
		roundedRating,
	};
};
