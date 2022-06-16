import NextCors from "nextjs-cors";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{
		redirect_url?: string;
		token: string;
	}>
) {
	if (req.method === "POST") {
		return new Promise<void>((resolve, reject) => {
			NextCors(req, res, {
				// Options
				methods: ["POST"],
				origin: "*",
				optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
			}).then(() => {
				// console.log(req.body);
				axios
					.post("https://app.sandbox.midtrans.com/snap/v1/transactions", req.body, {
						headers: {
							Accept: "application/json",
							Authorization:
								"Basic U0ItTWlkLXNlcnZlci1QTVZ1T3J5b0F5X2RyYkhEeWJoX2ZlbW06",
							"Content-Type": "application/json",
						},
					})
					.then((r) => {
						res.json({
							token: r.data.token,
							redirect_url: r.data.redirect_url,
						});
						resolve();
					})
					.catch((err) => {
						console.log(err);
						res.end();
						reject();
					});
			});
		});
	}
}
