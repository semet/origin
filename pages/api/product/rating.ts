import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const rating = await prisma.product.findUnique({
		where: {
			id: req.query.productId as string,
		},

		select: {
			ratings: true,
		},
	});

	res.status(200).json({ ratings: rating?.ratings });
	res.end();
}
