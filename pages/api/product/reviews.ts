import { ProductReview } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

type Data = {
	reviews: ProductReview[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const product = await prisma.product.findUnique({
			where: {
				id: req.query.productId as string,
			},
			include: {
				reviews: {
					select: {
						comment: true,
						createdAt: true,
						customer: {
							select: {
								name: true,
								email: true,
								phone: true,
							},
						},
						helpful: true,
						media: true,
						updatedAt: true,
						id: true,
						customerId: true,
						productId: true,
					},
				},
			},
		});
		res.status(200).json({
			reviews: product!.reviews,
		});
		res.end();
	} catch (e) {
		res.end();
		throw e;
	}
}
