import { prisma } from "../prisma/db";

const auth = {
	login: async (email: string) => {
		return await prisma.customer.findUnique({
			where: {
				email: email,
			},
			select: {
				email: true,
				name: true,
				password: true,
				id: true,
			},
		});
	},
	customerDetails: async (email: string) => {
		return await prisma.customer.findUnique({
			where: {
				email: email,
			},
			select: {
				active: true,
				shippingAddress: {
					select: {
						id: true,
						addressLine1: true,
						addressLine2: true,
						city: true,
						cityId: true,
						province: true,
						provinceId: true,
						zipCode: true,
					},
				},
				deliveryService: true,
				email: true,
				emailVerifiedAt: true,
				gender: true,
				id: true,
				name: true,
				phone: true,
				point: true,
			},
		});
	},
};

export default auth;
