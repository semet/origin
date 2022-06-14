declare module "store" {
	import { ProductWithDetails, ShippingAddressDetail } from "common";
	import type {
		Prisma,
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

	type CartItem = Pick<
		ProductWithDetails,
		| "createdAt"
		| "id"
		| "name"
		| "images"
		| "oldPrice"
		| "price"
		| "weight"
		| "sku"
		| "slug"
	> & { quantity: number };

	type CartState = {
		items: CartItem[];
		amount: number;
		total: number;
	};

	type CheckoutState = {
		courier: string;
		cityDestination: number;
		ShippingAddress: string;
		deliveryCost: number;
		deliveryService: string;
		estimatedDelivery: string;
		isPending: boolean;
	};
}
