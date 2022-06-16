import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const session = await getSession({ req });
	try {
		const contact = await prisma.customer.findUnique({
			where: {
				email: session?.user?.email as string,
			},
			select: {
				id: true,
				name: true,
				email: true,
				phone: true,
			},
		});
		res.status(200).json({ contact });
		res.end();
	} catch (e) {}
}
