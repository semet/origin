import menuReducer from "./menu/menuSlice";
import cartReducer from "./cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import currentProductReducer from "./product/productSlice";

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		cart: cartReducer,
		currentProduct: currentProductReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
