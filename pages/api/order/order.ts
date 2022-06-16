import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";
import { CartItem } from "store";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		//save the order to the database
		const order = await prisma.order.create({
			data: {
				courier: req.body.courier,
				deliveryCost: req.body.deliveryCost,
				price: req.body.price,
				snapToken: req.body.snapToken,
				shippingAddress: {
					connect: {
						id: req.body.shippingAddressId,
					},
				},
				number: req.body.number,
				customer: {
					connect: {
						id: req.body.customerId,
					},
				},
			},
		});
		//save order items
		for (const item of req.body.products as CartItem[]) {
			await prisma.orderItem.create({
				data: {
					order: {
						connect: {
							id: order.id,
						},
					},
					price: item.price,
					product: {
						connect: {
							id: item.id,
						},
					},
					quantity: item.quantity,
				},
			});
		}
		//save order details
		await prisma.orderDetail.create({
			data: {
				paymentType: req.body.payment_type,
				transactionId: req.body.transaction_id,
				transactionStatus: req.body.transaction_status,
				statusCode: req.body.status_code,
				statusMessage: req.body.status_message,
				transactionTime: new Date(req.body.transaction_time),
				fraudStatus: req.body.fraud_status,
				paymentCode: req.body.payment_code,
				pdfUrl: req.body.pdf_url,
				finishRedirectUrl: req.body.finish_redirect_url,
				order: {
					connect: {
						id: order.id,
					},
				},
			},
		});
		res.status(200).json({ message: "Order created. Everything's good!!" });
		res.end();
	} catch (e) {
		res.end();
		throw e;
	}
}
