import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import "./CardStyle.css";

export default function CardComponent({id, name, image, kitchen, description, onItemClick}) {
  return (
    <Card className="card" key={id}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {kitchen }
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          <img width="300" src={image} alt={name} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => onItemClick(name)}
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
