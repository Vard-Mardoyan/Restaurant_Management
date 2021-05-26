import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { DRINK_DATA } from "../service/data";
import './ListStyle.css';

export default function GetListOfDrink(onItemClick) {

  return (
    <div>
      <ul className="list">
        {DRINK_DATA.map(({ id, name, image, description }) => {
          return (
            <Card className="card" key={id}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {name}
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
        })}
      </ul>
    </div>
  );

}