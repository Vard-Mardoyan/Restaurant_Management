import React from "react";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@material-ui/core";
import "./CardStyle.css";
import { useCartContext } from "../../context/cart/CartState";
import formatCurrency from "format-currency";

export default function CardBeerComponent({
	id,
	name,
	description,
	image_url,
	volume,
}) {
	const { addToCart, cartItems, increase } = useCartContext();
	let opts = { format: "%s%v", symbol: "$" };
	const price = volume.value;
	const maxLength = 37;

	return (
		<Card className={!id && !image_url && !name &&  !description && !price? "empty" : "card" } key={id}>
			<CardContent className="card-component">
			<Typography variant="body2" component="p">
					<br />
					<img src={image_url} alt={name} className="beer-image" />
				</Typography>
				<Typography variant="h6" component="h6" className="item-decoration">
					{name}
				</Typography>
				<Typography color="textSecondary" gutterBottom className="item-decoration">
					{`${description.substring(0, maxLength)}`}
				</Typography>
				<Typography color="textSecondary" gutterBottom className="item-decoration">
					{formatCurrency(`${price}`, opts)}
				</Typography>
			</CardContent>
			{/* <CardActions>
			<Button
					addToItem={() => ({
						id,
						name,
						description,
						image_url,
						volume,
					})}
					variant="contained"
					color="primary"
					size="medium"
				>
					ADD TO CART
				</Button>
			</CardActions> */}

			<button
        className="add-button"
				// addToItem={() => ({
				// 	id,
				// 	name,
				// 	description,
				// 	image_url,
				// 	volume,
				// })}
			 >
        ADD TO CART
			</button>
		</Card>
	);
}
