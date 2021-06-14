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
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export const Cart = () => {
	const { showCart, itemCount, cartItems, showHideCart, total, clearCart } =
		useCartContext();
		let opts = { format: "%s%v", symbol: "$" };

	return (
		<>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
							
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
			<FaShoppingCart className='shopping-cart' onClick={showHideCart} />
	
						{cartItems.length > 0 && (
								<div className="item__count">
									<span>{cartItems.length}</span>
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
{/* 



		 <div className='cart__wrapper'>
                
                <div className="row no-gutters justify-content-center">
                    <div >
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

                    
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="Cart__cartTotal">
                            <div>
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
																<div style={{ marginLeft: 5 }}>
											{formatCurrency(`${total}`, opts)}

				
						</div>                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={showHideCart}>CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div> */}
			{/* {showCart && (
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
						<h4>{itemCount}</h4>
						<div style={{ marginLeft: 5 }}>
							{formatCurrency(`${total}`, opts)}

				
						</div>
						<button onClick={clearCart}>Clear All</button>
					</div>
				</div>
			)} */}