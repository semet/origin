import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const session = await getSession({ req });
	if (req.method !== "POST") {
		const session = await getSession({ req });
		try {
			const address = await prisma.customer.findUnique({
				where: {
					email: session?.user?.email as string,
				},
				select: {
					shippingAddress: {
						select: {
							addressLine1: true,
							addressLine2: true,
							city: true,
							province: true,
							id: true,
						},
					},
				},
			});
			res.status(200).json({ address: address?.shippingAddress });
			res.end();
		} catch (e) {}
	} else if (req.method === "POST") {
		if (session) {
			await prisma.shippingAddress.delete({
				where: {
					id: req.body.addressId,
				},
			});
			res.status(200).json({ message: "Address Deleted" });
			res.end();
		} else {
			res.status(400).end();
			throw "You are not allowed to perform this request";
		}
	}
}
