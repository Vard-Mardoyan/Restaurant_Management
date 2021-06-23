import React from "react";
import {
  Avatar,
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import PaymentTwoToneIcon from "@material-ui/icons/PaymentTwoTone";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartTwoToneIcon from "@material-ui/icons/RemoveShoppingCartTwoTone";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LocalMallTwoToneIcon from "@material-ui/icons/LocalMallTwoTone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import LocalOfferTwoToneIcon from "@material-ui/icons/LocalOfferTwoTone";
import { FaRegTimesCircle } from "react-icons/fa";
import clsx from "clsx";
import logo from "./../assets/image/13.jpg";
import formatCurrency from "format-currency";
import { useCartContext } from "../context/cart/CartState";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    marginTop: 10,

    // maxHeight: 250,
  },
  media: {
    height: 0,
		margin: '-25px 0px 15px 0px',
		backgroundSize: 'contain',
    paddingTop: "59%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const CartItem = ({ item }) => {
  const {
    removeItem,
    increase,
    decrease,
    itemCount,
    cartItems,
    total,
    showHideCart,
    clearCart,
  } = useCartContext();
  let opts = { format: "%s%v", symbol: "€" };
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          // <Avatar aria-label="recipe" className={classes.avatar}>
          <img className="restaurant-logo" src={logo} alt="logo" />
          // </Avatar>
        }
        title="Shrimp and Chorizo Paella"
      />

      <CardContent>
      <CardMedia
        className={classes.media}
        image={item.image || item.image_url}
        title="item.image"
      />
      {/* <CardContent> */}
        <Typography variant="body2" color="textSecondary" component="p">
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <LocalOfferTwoToneIcon />{" "}
          {formatCurrency(`${item.price || item.volume.value}`, opts)}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Typography>
          <AddShoppingCartIcon />
          {item.quantity}
        </Typography>
        <IconButton>
          <AddCircleOutlineIcon onClick={() => increase(item)} />
        </IconButton>

        {item.quantity > 1 && (
          <IconButton aria-label="share">
            <RemoveCircleOutlineIcon onClick={() => decrease(item)} />
          </IconButton>
        )}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
        >
          <DeleteOutlinedIcon
            onClick={() => removeItem(item)}
            aria-expanded={expanded}
            aria-label="show more"
          />
        </IconButton>
      </CardActions>
      {cartItems.length > 0 && (
        <Typography className="Cart__cartTotal">
          <Typography>
            {/* <p className="mb-1">Total Items <ShoppingCartIcon/>{itemCount} </p> */}
            {/* <span className="mb-1">
              Total Payment <PaymentTwoToneIcon />{" "}
              {formatCurrency(`${total}`, opts)}
            </span> */}

            {/* <Typography className="text-center">
              <ButtonBase
                type="button"
                className="btn btn-outlineprimary btn-sm"
                onClick={clearCart}
              >
                Clear All
              </ButtonBase>
            </Typography> */}
          </Typography>
        </Typography>
      )}
    </Card>
  );
};

export default CartItem;

// testing
// 		<div className='cart__wrapper'>

// 		<div className="row no-gutters justify-content-center">
// 				<div >
// 						{
// 								cartItems.length > 0 ?
// 								<ul>
// 								{cartItems.map((item) => (
// 									<CartItem key={item.id} item={item} />
// 								))}
// 							</ul> :
// 								<div className="cart__innerWrapper">
// 										Your cart is empty
// 								</div>
// 						}

// 						{ showCart &&
// 								<div >
// 										<p>Checkout successfull</p>
// 								</div>
// 						}
// 				</div>
// 				{
// 						cartItems.length > 0 &&
// 						<div className="Cart__cartTotal">
// 								<div>
// 										<p className="mb-1">Total Items</p>
// 										<h4 className=" mb-3 txt-right">{itemCount}</h4>
// 										<p className="mb-1">Total Payment</p>
// 										<div style={{ marginLeft: 5 }}>
// 					{formatCurrency(`${total}`, opts)}

// </div>                                <hr className="my-4"/>
// 										<div className="text-center">
// 												<button type="button" className="btn btn-primary mb-2" onClick={showHideCart}>CHECKOUT</button>
// 												<button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
// 										</div>

// 								</div>
// 						</div>
// 				}

// 		</div>
// </div>