import axios from "axios";
import { NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Success: NextPage<{ order: string }> = ({ order }) => {
	useEffect(() => {
		console.log(order);
	}, []);
	return (
		<React.Fragment>
			<div>success</div>
		</React.Fragment>
	);
};

export default Success;

export const getServerSideProps = async (context: any) => {
	const query = context.query;
	const order = await axios.get(
		`https://api.sandbox.midtrans.com/v2/${query.order_id}/status`,
		{
			headers: {
				Accept: "application/json",
				Authorization: "Basic U0ItTWlkLXNlcnZlci1QTVZ1T3J5b0F5X2RyYkhEeWJoX2ZlbW06",
				"Content-Type": "application/json",
			},
		}
	);

	return {
		props: {
			order: JSON.parse(JSON.stringify(order.data)),
		},
	};
};
