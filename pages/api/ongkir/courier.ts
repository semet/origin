import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const couriers = await prisma.courier.findMany({
			select: {
				id: true,
				code: true,
				title: true,
			},
			orderBy: {
				title: "asc",
			},
		});

		res.status(200).json({
			couriers: JSON.parse(JSON.stringify(couriers)),
		});
	} catch (err) {
		res.status(500).end();
		throw err;
	}
}
