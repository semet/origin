import { NextPageWithLayout } from "next";
import React, { ReactElement } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import MainLayout from "../../components/layouts/MainLayout";

const Login: NextPageWithLayout = () => {
	return <div>login</div>;
};

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;
export default Login;
