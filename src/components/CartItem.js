
import React from 'react'
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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";

import formatCurrency from "format-currency";
import { useCartContext } from "../context/cart/CartState";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
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
	const { removeItem } = useCartContext();
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
				<ButtonBase onClick={() => removeItem(item.id)}>Remove</ButtonBase>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			{/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
			<CardContent>
	
			</CardContent>
			{/* </Collapse> */}
		</Card>
		// <li className="CartItem__item">
		// 	<img className="cart_image" src={item.image} alt="item.image" />
		// 	<div>
		// 		{item.name} {formatCurrency(`${item.price}`, opts)}
		// 	</div>
		// 	<button className="CartItem__button" onClick={() => removeItem(item.id)}>
		// 		Remove
		// 	</button>
		// </li>
	);
};

export default CartItem;
