// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Province } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import rajaOngkir from "../../utils/rajaOngkir";

type Data = {
	provinces: Province[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const response = await rajaOngkir.get(
			"https://api.rajaongkir.com/starter/province"
		);
		res.status(200).json({ provinces: response.data.rajaongkir.results });
		res.end();
	} catch (err) {
		console.log(err);
		throw err;
	}
}
