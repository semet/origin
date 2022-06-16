import { OrderItem } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { customAlphabet } from "nanoid";

export type MidtransParameter = {
	transaction_details: {
		order_id: string;
		gross_amount: number;
	};
	item_details: {
		id: string | number;
		price: number;
		name: string;
		quantity: number;
	}[];
	customer_details: {
		first_name: string;
		email: string;
		phone: string;
	};
	credit_card?: {
		secure?: boolean;
		save_card?: boolean;
	};
	callbacks?: {
		finish: string;
	};
};

export type MidtransResponse = {
	status_code: number;
	status_message: string;
	transaction_id: string;
	payment_type: string;
	transaction_time: string;
	transaction_status: string;
	fraud_status?: string;
	payment_code?: string;
	pdf_url?: string;
	finish_redirect_url?: string;
};

export const getSnapToken = async (data: MidtransParameter) => {
	const response = await axios.post("/api/payment", data);
	console.log(response);
	return response.data.token;
};

export const generateOrderNumber = () => {
	const date = new Date();
	const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 6);
	const pattern = `${date.getUTCMonth() + 1}${date.getUTCDate()}${date
		.getFullYear()
		.toString()
		.substring(2)}${nanoid()}`;

	return pattern.toUpperCase();
};
