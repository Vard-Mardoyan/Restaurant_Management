import { useCartContext } from "../../context/cart/CartState";
import { getBeersData } from "../../data/service/beers";
import { loadState } from "../../helpers/local-storage";
import CardBeerComponent from "../card/CardBeer";
import "./CardListStyle.css";

// <<<<<<< HEAD
export default function CardListBeer({ items }) {
  const { addToCart } = useCartContext();

  if (loadState('DRINK_DATA_loc') || loadState(getBeersData())) {
// =======
// export default function CardListBeer({ addToCart, items}) {
// >>>>>>> 176a1e18471d68fcd14c803cd2650794a37523c7
  return (
    <div>
      <ul className="list">
        {items?.map(({ id, name, description, image_url, volume, quantity = 0 }) => {
   
   return (
            <div key={id}>
              <CardBeerComponent
                {...{ id, name, description, image_url, volume, quantity }}
                addToCart={addToCart}
              />
            </div>
          );
        })}
      </ul>
    </div>
  )
      }
    }
    
