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

export default function CardBeerComponent({
	id,
	name,
	description,
	image_url,
	volume,
	hops,
	addToItem,
}) {
	const { addToCart, cartItems, increase } = useCartContext();

	return (
		<Card className="card" key={id}>
			<CardContent>
				<Typography variant="h5" component="h2">
					{name}
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					{description}
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					{volume.value} {volume.unit}
				</Typography>
				{/* <Typography color="textSecondary" gutterBottom>
					{hops.amount.value}
				</Typography> */}
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
						hops,
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
