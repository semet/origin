import { prisma } from "../prisma/db";
// export const allCategories =

const category = {
	all: async () => {
		return await prisma.category.findMany({
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
	},
};

export default category;
