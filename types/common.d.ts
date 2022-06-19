declare module "common" {
	import type {
		Prisma,
		Category,
		Product,
		ProductImage,
		ProductReview,
		ProductRating,
		Customer,
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
		_count: Prisma.ProductCountOutputType;
	};

	type ShippingAddressDetail = Prisma.ShippingAddressGetPayload<{
		select: {
			id: true;
			addressLine1: true;
			addressLine2: true;
			city: true;
			cityId: true;
			province: true;
			provinceId: true;
			zipCode: true;
		};
	}>;

	type CustomerAccount = Customer & { shippingAddress: ShippingAddressDetail[] };

	type CheckoutProps = {
		account: CustomerAccount;
	};

	type RajaOngkirService = {
		code: string;
		name: string;
		costs: {
			service: string;
			description: string;
			cost: {
				value: number;
				etd: string;
				note?: string;
			}[];
		}[];
	};

	type ProductPageProps = {
		product: ProductWithDetails;
	};

	type ProductReviewWithUser = {
		[k in keyof ProductReview]: ProductReview[k];
	} & Prisma.ProductReviewGetPayload<{
		include: {
			customer: true;
		};
	}>;
}
