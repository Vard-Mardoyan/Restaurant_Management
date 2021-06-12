import React from "react";
// import { useContext } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import "./CardStyle.css";
import formatCurrency from "format-currency";
import { useCartContext } from "../../context/cart/CartState";
//import usePagination from "../../hooks/usePagination";

export default function CardComponent({
	id,
	name,
	image,
	kitchen,
	description,
	quantity,
	price,
}) {
	const { addToCart, cartItems, increase } = useCartContext();
	let opts = { format: "%s%v", symbol: "$" };


	const isItemOnList = () => {
		return cartItems.find((product) => product.id === id) !== undefined;
	}

	const handleClick = () => {
		if(isItemOnList()) {
			increase({ id });
		} else {
			addToCart({ id, name, image, kitchen, description, price })
		}
	};

	return (
		<Card className="card" key={id}>
			<CardContent>
				<Typography variant="h5" component="h2">
					{name}
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					{kitchen}
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					{description}
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					{formatCurrency(`${price}`, opts)}
				</Typography>
				<Typography variant="body2" component="p">
					<br />
					<img width="300" src={image} alt={name} />
				</Typography>
			</CardContent>
			{/* {isInCart(item) && (
				<Button
					onClick={() => increase(item)}
					className="btn btn-outline-primary btn-sm"
				>
					Add more
				</Button>
			)
			} */}
			{/* {!isInCart(item) && ( */}
			<CardActions>
				<Button
					// onClick={() => addToCart({ item })}
					onClick={handleClick}
					variant="contained"
					color="primary"
					size="medium"
				>
					{isItemOnList() ? `${quantity || 1}+` : 'Add to Cart'}
				</Button>
			</CardActions>
			{/* )} */}
		</Card>
	);

}
