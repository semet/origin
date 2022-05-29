import "../styles/globals.css";
import type { ReactNode } from "react";
import type { AppPropsWithLayout } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Provider as StoreProvider } from "react-redux";
import { store } from "../features/store";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page: ReactNode) => page);
	return (
		<StoreProvider store={store}>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta name="author" content="Mollusca" />
				<meta name="email" content="origin@gmail.com" />
				<meta name="name" content="Origin" />
				<meta name="title" content="Origin - eCommerce Website" />
				<meta
					name="keywords"
					content="organic, food, shop, ecommerce, store, html, bootstrap, template, agriculture, vegetables, webshop, farm, grocery, natural, online store"
				/>
			</Head>
			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
				crossOrigin="anonymous"
			/>
			{getLayout(<Component {...pageProps} />)}
		</StoreProvider>
	);
}

export default MyApp;
