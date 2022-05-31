import axios from "axios";
import { ProductState } from "store";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = {
	product: undefined,
	isLoading: true,
	isError: false,
	errorMessage: "",
};

export const setSelectedProduct = createAsyncThunk(
	"product/setSelectedProduct",
	async (productId: string, thunkApi) => {
		const response = await axios.get(`/api/product-preview?id=${productId}`);
		return response.data;
	}
);
const productSlice = createSlice({
	name: "selected-product",
	initialState,
	reducers: {
		clearSelectedProduct: (state: ProductState) => {
			state.product = undefined;
			state.isLoading = true;
			state.isError = false;
			state.errorMessage = "";
		},
	},
	extraReducers: (builder: ActionReducerMapBuilder<ProductState>) => {
		builder
			.addCase(setSelectedProduct.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(setSelectedProduct.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
				state.errorMessage = "Internal Server Error. Please try again!";
				state.product = undefined;
			})
			.addCase(setSelectedProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.errorMessage = "";
				state.product = action.payload;
			});
	},
});
export const { clearSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
