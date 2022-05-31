// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "@prisma/client";
import { prisma } from "../../prisma/db";

type Data = {
	product: Product;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const product = await prisma.product.findUnique({
			where: {
				id: req.query.id as string,
			},
			include: {
				images: true,
			},
		});
		res.status(200).json(JSON.parse(JSON.stringify(product)));
	} catch (e) {
		throw e;
	}
}
