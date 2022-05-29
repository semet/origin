import { createSlice } from "@reduxjs/toolkit";
import type { MenuState } from "store";

const initialState: MenuState = {
	isCategorySidebarOpen: false,
	isMobileSidebarOpen: false,
	isCartOpen: false,
	isSearchOpen: false,
};

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		toggCategoryleSidebar: (state: MenuState) => {
			state.isCategorySidebarOpen = !state.isCategorySidebarOpen;
		},

		toggleMobileSidebar: (state: MenuState) => {
			state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
		},

		toggleCart: (state: MenuState) => {
			state.isCartOpen = !state.isCartOpen;
		},

		toggleSearch: (state: MenuState) => {
			state.isSearchOpen = !state.isSearchOpen;
		},
	},
});

export const { toggCategoryleSidebar, toggleMobileSidebar, toggleCart, toggleSearch } =
	menuSlice.actions;

export default menuSlice.reducer;
