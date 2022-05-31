import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu/menuSlice";
import currentProductReducer from "./product/productSlice";
export const store = configureStore({
	reducer: {
		menu: menuReducer,
		currentProduct: currentProductReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
