import { prisma } from "../prisma/db";

const auth = {
	login: async (email: string) => {
		return await prisma.customer.findUnique({
			where: {
				email: email,
			},
			select: {
				active: true,
				billingAddress: true,
				deliveryService: true,
				email: true,
				emailVerifiedAt: true,
				gender: true,
				id: true,
				name: true,
				password: true,
				phone: true,
				point: true,
			},
		});
	},
};

export default auth;
