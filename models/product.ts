import { prisma } from "../prisma/db";
const product = {
	onSale: async (limit: number) => {
		return prisma.product.findMany({
			where: {
				isDiscounted: true,
			},
			orderBy: {
				discount: "desc",
			},
			include: {
				images: true,
				// artist: true,
				category: true,
				ratings: true,
				reviews: true,
			},
			take: limit,
		});
	},
	featured: async (limit: number) => {
		return prisma.product.findMany({
			orderBy: {
				sold: "desc",
			},
			include: {
				images: true,
				// artist: true,
				category: true,
				ratings: true,
				reviews: true,
			},
			take: limit,
		});
	},
	latest: async (limit: number) => {
		return prisma.product.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				images: true,
				// artist: true,
				category: true,
				ratings: true,
				reviews: true,
			},
			take: limit,
		});
	},
	mostLiked: async (limit: number) => {
		return prisma.product.findMany({
			orderBy: {
				like: "asc",
			},
			include: {
				images: true,
				// artist: true,
				category: true,
				ratings: true,
				reviews: true,
			},
			take: limit,
		});
	},
};

export default product;
