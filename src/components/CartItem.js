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
	IconButton,
	Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import clsx from "clsx";

import formatCurrency from "format-currency";
import { useCartContext } from "../context/cart/CartState";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", 
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
	avatar: {
		backgroundColor: red[500],
	},
}));
const CartItem = ({ item }) => {
	const { removeItem, increase, decrease } = useCartContext();
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
					<Avatar aria-label="recipe" className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>
			<CardMedia
				className={classes.media}
				image={item.image}
				title="item.image"
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{item.name}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{formatCurrency(`${item.price}`, opts)}
				</Typography>
			</CardContent>

			<Typography>Qty: {item.quantity}</Typography>

			<CardActions disableSpacing>
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
		</Card>
	);
};

export default CartItem;
