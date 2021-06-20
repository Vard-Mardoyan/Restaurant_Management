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

	return (
		<Card className={!id && !image_url && !name &&  !description && !price? "empty" : "card" } key={id}>
			<CardContent>
				<Typography variant="h5" component="h2">
					{name}
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					{description}
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					{formatCurrency(`${price}`, opts)}
				</Typography>
				<Typography variant="body2" component="p">
					<br />
					<img src={image_url} alt={name} width="70" />
				</Typography>
			</CardContent>
			<CardActions>
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
					Add to Cart
				</Button>
			</CardActions>
		</Card>
	);
}
