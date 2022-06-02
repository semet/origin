import { prisma } from "../prisma/db";
const product = {
	onSale: async (limit: number) => {
		return await prisma.product.findMany({
			where: {
				isDiscounted: true,
			},
			orderBy: {
				discount: "desc",
			},
			select: {
				id: true,
				discount: true,
				isDiscounted: true,
				name: true,
				like: true,
				oldPrice: true,
				price: true,
				artist: {
					select: {
						name: true,
					},
				},
				images: {
					select: {
						name: true,
					},
				},
				// artist: true,
				category: {
					select: {
						name: true,
					},
				},
				ratings: true,
				reviews: true,
			},
			take: limit,
		});
	},
	featured: async (limit: number) => {
		return await prisma.product.findMany({
			orderBy: {
				sold: "desc",
			},
			select: {
				id: true,
				discount: true,
				description: true,
				isDiscounted: true,
				name: true,
				like: true,
				oldPrice: true,
				price: true,
				artist: {
					select: {
						name: true,
					},
				},
				images: {
					select: {
						name: true,
					},
				},
				// artist: true,
				category: {
					select: {
						name: true,
					},
				},
				ratings: true,
				reviews: true,
			},
			take: limit,
		});
	},
	latest: async (limit: number) => {
		return await prisma.product.findMany({
			orderBy: {
				createdAt: "desc",
			},
			select: {
				id: true,
				discount: true,
				isDiscounted: true,
				name: true,
				like: true,
				oldPrice: true,
				price: true,
				artist: {
					select: {
						name: true,
					},
				},
				images: {
					select: {
						name: true,
					},
				},
				// artist: true,
				category: {
					select: {
						name: true,
					},
				},
				ratings: true,
				reviews: true,
			},
			take: limit,
		});
	},
	mostLiked: async (limit: number) => {
		return await prisma.product.findMany({
			orderBy: {
				like: "asc",
			},
			select: {
				id: true,
				discount: true,
				isDiscounted: true,
				name: true,
				like: true,
				oldPrice: true,
				price: true,
				artist: {
					select: {
						name: true,
					},
				},
				images: {
					select: {
						name: true,
					},
				},
				// artist: true,
				category: {
					select: {
						name: true,
					},
				},
				ratings: true,
				reviews: true,
			},
			take: limit,
		});
	},
};

export default product;
