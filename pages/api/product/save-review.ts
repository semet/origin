import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const session = await getSession({ req });
	if (req.method === "POST") {
		if (session) {
			const customer = await prisma.customer.findUnique({
				where: {
					email: session.user!.email as string,
				},
				select: {
					id: true,
				},
			});
			const review = await prisma.productReview.create({
				data: {
					customer: {
						connect: {
							id: customer!.id,
						},
					},
					product: {
						connect: {
							id: req.body.productId,
						},
					},
					comment: req.body.review,
				},
			});

			res.status(200).json({
				message: "Review saved successfully",
			});
			res.end();
		} else {
			res.status(400).end();
			throw "You are not allowed to perform this request";
		}
	} else {
		res.status(405).end();
		throw "Method not allowed";
	}
}
