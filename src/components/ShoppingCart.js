import { useContext } from "react";
import "./ShoppingCart.css";
// import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import formatCurrency from "format-currency";
import { useCartContext } from "../context/cart/CartState";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";

export const Cart = () => {
	const { showCart, itemCount, cartItems, showHideCart, total, clearCart } =
		useCartContext();
		let opts = { format: "%s%v", symbol: "$" };

	console.log(total, 'total::::');

	return (
		<>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
							
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
			<FaShoppingCart className='shopping-cart' onClick={showHideCart} />
	
						{cartItems.length > 0 && (
								<div className="item__count">
									{/* <span>{cartItems.length}</span> */}
                  <span>{itemCount}</span>
								</div>
							)} 
          </Button>
					
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography>
						{ 
                            cartItems.length > 0 ?
														<ul>
														{cartItems.map((item) => (
															<CartItem key={item.id} item={item} />
														))}
													</ul> :
                            <div className="cart__innerWrapper">
                                Your cart is empty
                            </div>
                        }
												</Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
		 </>
	);
};

export default Cart;