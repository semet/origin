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
					take: 1,
				},
				// artist: true,
				category: {
					select: {
						name: true,
					},
				},
				ratings: true,
				reviews: true,
				sku: true,
				slug: true,
				weight: true,
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
					take: 1,
				},
				// artist: true,
				category: {
					select: {
						name: true,
					},
				},
				ratings: true,
				reviews: true,
				sku: true,
				slug: true,
				weight: true,
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
					take: 1,
				},
				// artist: true,
				category: {
					select: {
						name: true,
					},
				},
				ratings: true,
				reviews: true,
				sku: true,
				slug: true,
				weight: true,
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
					take: 1,
				},
				// artist: true,
				category: {
					select: {
						name: true,
					},
				},
				ratings: true,
				reviews: true,
				sku: true,
				slug: true,
				weight: true,
			},
			take: limit,
		});
	},
	find: async (id: string | undefined) => {
		return await prisma.product.findUnique({
			where: {
				id: id,
			},
			include: {
				images: true,
				reviews: {
					include: {
						customer: true,
					},
				},
				_count: {
					select: {
						reviews: true,
					},
				},
			},
		});
	},
	all: async () => {
		return await prisma.product.findMany({
			select: {
				id: true,
			},
		});
	},
};

export default product;
