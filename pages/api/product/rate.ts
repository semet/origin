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
					productRatings: true,
				},
			});
			let rating;
			if (
				customer?.productRatings
					.map((rating) => rating.productId)
					.includes(req.body.productId) &&
				customer?.productRatings
					.map((rating) => rating.customerId)
					.includes(customer.id)
			) {
				rating = await prisma.productRating.updateMany({
					where: {
						customerId: customer.id,
						productId: req.body.productId,
					},
					data: {
						rating: Number(req.body.rating),
					},
				});
			} else {
				rating = await prisma.productRating.create({
					data: {
						product: {
							connect: {
								id: req.body.productId as string,
							},
						},
						customer: {
							connect: {
								id: customer!.id,
							},
						},
						rating: Number(req.body.rating),
					},
				});
			}

			res.status(200).json({
				message: "Rate success",
				data: rating,
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
