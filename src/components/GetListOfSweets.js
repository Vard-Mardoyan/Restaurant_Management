import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { SWEERTS_DATA } from "../service/data";
import './ListStyle.css';

export default function GetListOfSweets(onItemClick) {
  return (
    <div>
      <ul className="list">
        {SWEERTS_DATA.map(({ id, name, image, kitchen}) => {
          return (
            <Card className="card" key={id}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                 {kitchen}
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
