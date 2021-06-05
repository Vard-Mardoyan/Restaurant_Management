import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import "./CardStyle.css";
import formatCurrency from "format-currency";

export default function CardBeerComponent({id, name, description, image_url, volume, onItemClick}) {

  let opts = { format: "%s%v", symbol: "$" };
  const price = volume.value;

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
          {formatCurrency(`${price}`, opts)} 
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          <img src={image_url} alt={name} width="70" />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => (name)}
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
