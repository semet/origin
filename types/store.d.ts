declare module "store" {
	import { ProductWithDetails } from "common";
	import type {
		Product,
		ProductImage,
		ProductRating,
		ProductReview,
		Wishlist,
	} from "@prisma/client";

	type MenuState = {
		isCategorySidebarOpen: boolean;
		isMobileSidebarOpen: boolean;
		isCartOpen: boolean;
		isSearchOpen: boolean;
	};

	type ProductState = {
		product: ProductWithDetails | undefined;
		isLoading: boolean;
		isError: boolean;
		errorMessage: string;
	};
}
