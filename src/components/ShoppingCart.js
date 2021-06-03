import { useContext } from "react";
import "./ShoppingCart.css";
// import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import { FaRegTimesCircle } from "react-icons/fa";
import formatCurrency from "format-currency";
import { useCartContext } from "../context/cart/CartState";

const Cart = () => {
	const { showCart, cartItems, showHideCart } = useCartContext();
	let opts = { format: "%s%v", symbol: "€" };

	return (
		<>
			{showCart && (
				<div className="cart__wrapper">
					<div style={{ textAlign: "right" }}>
						<FaRegTimesCircle
							style={{ cursor: "pointer" }}
							className="fa fa-times-circle"
							aria-hidden="true"
							onClick={showHideCart}
						/>
					</div>
					<div className="cart__innerWrapper">
						{cartItems.length === 0 ? (
							<h4>Cart is Empty</h4>
						) : (
							<ul>
								{cartItems.map((item) => (
									<CartItem key={item.id} item={item} />
								))}
							</ul>
						)}
					</div>
					<div className="Cart__cartTotal">
						<div>Cart Total</div>
						<div></div>
						<div style={{ marginLeft: 5 }}>
							{formatCurrency(
								cartItems.reduce((amount, item) => item.price + amount, 0),
								opts
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
