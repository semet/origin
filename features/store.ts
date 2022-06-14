import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu/menuSlice";
import cartReducer from "./cart/cartSlice";
import currentProductReducer from "./product/productSlice";
import checkoutReducer from "./checkout/checkoutSlice";

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		cart: cartReducer,
		currentProduct: currentProductReducer,
		checkout: checkoutReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
