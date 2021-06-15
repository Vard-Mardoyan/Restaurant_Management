import { useCartContext } from "../../context/cart/CartState";
import {
  SWEETS_DATA_FROM_LOCAL_STORAGE,
  FOODS_DATA_FROM_LOCAL_STORAGE,
} from "../../helpers/local-storage";
import CardComponent from "../card/Card";

import "./CardListStyle.css";

export default function CardList({ data }) {
  const { addToCart } = useCartContext();
  //console.log(data, "data:::::");

  if (
    data === SWEETS_DATA_FROM_LOCAL_STORAGE ||
    data === FOODS_DATA_FROM_LOCAL_STORAGE
  ) {
    return (
      <ul className="list">
        {data?.map(({ id, name, image, kitchen, price, quantity = 0 }) => {
          return (
            <div key={id}>
              <CardComponent
                {...{ id, name, image, kitchen, price, quantity }}
                addToCart={addToCart}
              />
            </div>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="list">
      {data?.map(
        ({ id, name, image, kitchen, description, price, quantity = 0 }) => {
          return (
            <div key={id}>
              <CardComponent
                {...{ id, name, image, kitchen, description, price, quantity }}
                addToCart={addToCart}
              />
            </div>
          );
        }
      )}
    </ul>
  );
}

// export default function CardList({ dataType, paginatedData }) {
// 	const { addToCart } = useCartContext();

// 	console.log(dataType, "dataType");
// 	console.log(paginatedData, "data");

// 	if (DATA[dataType] === "SWEETS_DATA_FROM_LOCAL_STORAGE" || DATA[dataType] === "FOODS_DATA_FROM_LOCAL_STORAGE") {
// 		return (
// 			<div>
// 				<ul className="list">
// 					{DATA[dataType]?.map(({ id, name, image, kitchen, price, quantity = 0 }) => {
// 						return (
// 							<div key={id}>
// 								<CardComponent
// 									{...{ id, name, image, kitchen, price, quantity }}
// 									addToCart={addToCart}
// 								/>
// 							</div>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		);
// 	}

// 	return (
// 		<div>
// 			<ul className="list">
// 				{paginatedData?.map(
// 					({ id, name, image, kitchen, description, price, quantity = 0 }) => {
// 						return (
// 							<div key={id}>
// 								<CardComponent
// 									{...{ id, name, image, kitchen, description, price }}
// 									addToCart={addToCart}
// 								/>
// 							</div>
// 						);
// 					}
// 				)}
// 			</ul>
// 		</div>
// 	);

// }
