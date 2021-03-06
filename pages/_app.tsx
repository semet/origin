import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import Head from "next/head";
import Script from "next/script";
import { ReactNode } from "react";
import { store } from "../features/store";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import type { AppPropsWithLayout } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import { Provider as BusProvider } from "react-bus";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page: ReactNode) => page);
	return (
		<SessionProvider session={pageProps.session}>
			<StoreProvider store={store}>
				<BusProvider>
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
					<NextNProgress
						color="#29382f86"
						startPosition={0.3}
						stopDelayMs={200}
						height={3}
						showOnShallow={true}
					/>
					<ToastContainer />
					{getLayout(<Component {...pageProps} />)}
				</BusProvider>
			</StoreProvider>
		</SessionProvider>
	);
}

export default MyApp;
