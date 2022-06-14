import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const session = await getSession({ req });
	if (session) {
		const axiosInstance = axios.create({
			headers: {
				key: process.env.RAJA_ONGKIR_API_KEY as string,
				"content-type": "application/json",
			},
		});
		if (req.method === "POST") {
			await axiosInstance
				.post("https://api.rajaongkir.com/starter/cost", {
					origin: "239",
					destination: req.body.destination,
					weight: req.body.weight,
					courier: req.body.courier,
				})
				.then((response) => {
					res.send(response.data.rajaongkir.results[0]);
					res.statusCode = 200;
					console.log("ongkir done");
					res.end();
				})
				.catch((err) => {
					res.statusCode = 500;
					res.send(err);
					console.log("ongkir error");
					res.end();
				});
		}
	} else {
		res.status(401);
	}
	res.end();
}
