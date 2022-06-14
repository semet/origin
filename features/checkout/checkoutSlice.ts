import { createSlice } from "@reduxjs/toolkit";
import type { CheckoutState } from "store";

const initialState: CheckoutState = {
	courier: "",
	cityDestination: 0,
	ShippingAddress: "",
	deliveryCost: 0,
	deliveryService: "",
	estimatedDelivery: "",
	isPending: false,
};

const checkoutSlice = createSlice({
	name: "checkout",
	initialState,
	reducers: {
		setCourier: (state: CheckoutState, action: { payload: string }) => {
			state.courier = action.payload;
		},
		setCityDestination: (state: CheckoutState, action: { payload: number }) => {
			state.cityDestination = action.payload;
		},
		setShippingAddress: (state: CheckoutState, action: { payload: string }) => {
			state.ShippingAddress = action.payload;
			state.isPending = true;
		},
		setDeliveryCost: (state: CheckoutState, action: { payload: number }) => {
			state.deliveryCost = action.payload;
		},
		setDeliveryService: (state: CheckoutState, action: { payload: string }) => {
			state.deliveryService = action.payload;
		},
		setEstimatedDelivery: (state: CheckoutState, action: { payload: string }) => {
			state.estimatedDelivery = action.payload;
		},
	},
});

export const {
	setCourier,
	setCityDestination,
	setDeliveryCost,
	setDeliveryService,
	setEstimatedDelivery,
	setShippingAddress,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
