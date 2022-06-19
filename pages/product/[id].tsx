import Head from "next/head";
import { ProductPageProps } from "common";
import product from "../../models/product";
import React, { Fragment, ReactElement } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { GetStaticProps, GetStaticPaths, NextPageWithLayout } from "next";
import PageBanner from "../../components/partials/PageBanner";
import ProductImages from "../../components/page/product/ProductImages";
import ProductSummary from "../../components/page/product/ProductSummary";
import ProductTab from "../../components/page/product/ProductTab";

const Product: NextPageWithLayout<ProductPageProps> = ({ product }) => {
	return (
		<Fragment>
			<Head>
				<title>{`Product: ${product.name}`}</title>
			</Head>
			<PageBanner />
			<section className="inner-section">
				<div className="container">
					<div className="row">
						<ProductImages images={product.images} />
						<ProductSummary product={product} />
					</div>
				</div>
			</section>
			<section className="inner-section">
				<div className="container">
					<ProductTab product={product} />
				</div>
			</section>
		</Fragment>
	);
};

Product.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Product;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const productById = JSON.parse(
		JSON.stringify(await product.find(params!.id as string))
	);
	return {
		props: {
			product: productById,
		},
		revalidate: 30,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allProducts = await product.all();
	const paths = allProducts.map((product) => ({
		params: {
			id: product.id,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};
