import { useContext, useReducer } from "react";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";
import { cartReducer } from "./CartReducer";
import { CartState, initialState } from "./CartContext";

export const useCartContext = () => useContext(CartState);

const CartProvider = ({ children }) => {
	const [cartState, dispatch] = useReducer(cartReducer, initialState);

	const addToCart = (item) => {
		dispatch({ type: ADD_TO_CART, payload: item });
	};

	const showHideCart = () => {
		dispatch({ type: SHOW_HIDE_CART });
	};

	const removeItem = (id) => {
		dispatch({ type: REMOVE_ITEM, payload: id });
	};

	return (
		<CartState.Provider
			value={{
				...{ ...cartState, addToCart, showHideCart, removeItem, dispatch },
			}}
		>
			{children}
		</CartState.Provider>
	);
};

export default CartProvider;
