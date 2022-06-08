// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/db";
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const session = await getSession({ req });
	if (session) {
		try {
			const { provinceId, cityId, zipCode, addressLine1, addressLine2 } = req.body;

			const customer = await prisma.customer.findUnique({
				where: {
					email: session?.user?.email as string,
				},
				select: {
					id: true,
				},
			});
			const response = await prisma.shippingAddress.create({
				data: {
					customerId: customer?.id as string,
					provinceId: Number(provinceId),
					cityId: Number(cityId),
					zipCode: zipCode,
					addressLine1: addressLine1,
					addressLine2: addressLine2,
				},
			});
			console.log(response);
			res.status(200).json({ message: "John Doe" });
			res.end();
		} catch (e) {
			res.status(500).json({
				name: "Internal Server Error",
			});
		}
	} else {
		res.status(401);
	}
	res.end();
}
