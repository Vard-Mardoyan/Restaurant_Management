import { createContext } from "react";

export const initialState = {
	showCart: false,
	cartItems: [],
};

export const CartState = createContext({
	initialState,
	dispatch: () => null,
});
