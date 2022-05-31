declare module "common" {
	import type {
		Prisma,
		Category,
		Product,
		ProductImage,
		ProductReview,
		ProductRating,
	} from "@prisma/client";

	type PropsUnion = "sales" | "featured" | "latest" | "mostLiked";
	//if it is "category", then use CategoryAndCount
	type THomeProps = Record<PropsUnion, ProductWithDetails[]>;

	type HomeProps = Record<PropsUnion, ProductWithDetails[]> & {
		categories: CategoryAndCount[];
	};

	type CategoryAndCount = Category & {
		_count: Prisma.CategoryCountOutputType;
	};

	type ProductWithDetails = Product & {
		images: ProductImage[];
		reviews: ProductReview[];
		wishlists: Wishlist[];
		ratings: ProductRating[];
	};
}
