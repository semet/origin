import { City } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import rajaOngkir from "../../utils/rajaOngkir";

type Data = {
	cities: City[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const response = await rajaOngkir.get(
			`https://api.rajaongkir.com/starter/city?province=${req.query.provinceId}`
		);
		res.status(200).json({ cities: response.data.rajaongkir.results });
		res.end();
	} catch (err) {
		console.log(err);
		throw err;
	}
}
