import { NextPageWithLayout } from "next";
import React, { ReactElement } from "react";
import MainLayout from "../../components/layouts/MainLayout";

const Checkout: NextPageWithLayout = () => {
	return <div>checkout</div>;
};
Checkout.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Checkout;
