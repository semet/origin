import { NextPageWithLayout } from "next";
import Head from "next/head";
import React, { ReactElement } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import PageBanner from "../../components/partials/PageBanner";
import OrderItems from "../../components/page/checkout/OrderItems";
import LoginNotifier from "../../components/page/checkout/LoginNotifier";
import ContactDetails from "../../components/page/checkout/ContactDetails";
import DeliveryAddress from "../../components/page/checkout/DeliveryAddress";
import DeliveryOptions from "../../components/page/checkout/DeliveryOptions";
import ShippingDetails from "../../components/page/checkout/ShippingDetails";
import { getSession, useSession } from "next-auth/react";
import { CheckoutProps } from "common";
import auth from "../../models/auth";
import { CtxOrReq } from "next-auth/client/_utils";

const Checkout: NextPageWithLayout<{}> = () => {
	const { status } = useSession();
	return (
		<React.Fragment>
			<Head>
				<title>Checkout</title>
			</Head>
			<PageBanner />
			<section className="inner-section checkout-part">
				<div className="container">
					<div className="row">
						{/* Login Notifier */}

						{status === "unauthenticated" && <LoginNotifier />}
						{/* Order Items */}
						<OrderItems />
						{/* Contact Details */}
						<ContactDetails />
						{/*Delivery Address  */}
						<DeliveryAddress />
						{/* Delivery Options */}
						<DeliveryOptions />
						{/* Shipping Details */}
						<ShippingDetails />
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};
Checkout.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Checkout;

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
	const session = await getSession(context);

	if (!session || session!.expires < new Date().toISOString()) {
		return {
			redirect: {
				destination: "/auth/login",
			},
			props: {},
		};
	} else {
		return {
			props: {},
		};
	}
};
