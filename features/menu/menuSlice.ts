import { createSlice } from "@reduxjs/toolkit";
import type { MenuState } from "store";

const initialState: MenuState = {
	isSidebarOpen: false,
	isCartOpen: false,
	isSearchOpen: false,
};

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		toggleSidebar: (state: MenuState) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},

		toggleCart: (state: MenuState) => {
			state.isCartOpen = !state.isCartOpen;
		},

		toggleSearch: (state: MenuState) => {
			state.isSearchOpen = !state.isSearchOpen;
		},
	},
});

export const { toggleSidebar, toggleCart, toggleSearch } = menuSlice.actions;

export default menuSlice.reducer;
