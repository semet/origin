import { prisma } from "../prisma/db";
export const allCategories = prisma.category.findMany({
	orderBy: {
		name: "asc",
	},
	include: {
		_count: {
			select: {
				products: true,
			},
		},
	},
});
