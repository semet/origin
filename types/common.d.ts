declare module "common" {
	import type { Prisma, Category } from "@prisma/client";
	type HomeProps = {
		categories: CategoryAndCount[];
	};

	type CategoryAndCount = Category & {
		_count: Prisma.CategoryCountOutputType;
	};
}
