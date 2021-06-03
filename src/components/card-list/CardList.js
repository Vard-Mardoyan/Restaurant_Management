import { useCartContext } from "../../context/cart/CartState";
import { DATA } from "../../service/data";
import CardComponent from "../card/Card";
<<<<<<< HEAD
import './CardListStyle.css';

export default function CardList({onItemClick, dataType}) {

  console.log(dataType, 'dataType');

  if(DATA[dataType] === 'SWEETS_DATA' ||  DATA[dataType] === 'FOODS_DATA' ) {

    return (
      <div>
      <ul className="list">
      {DATA[dataType].map(({ id, name, image, kitchen }) => {
        return (
          <>
            <CardComponent {...{id, name, image, kitchen}} onItemClick={onItemClick}/>
          </>
        );
      })}
      </ul>
    </div>
    );
  }
  
  return (
    <div>
      <ul className="list">
      {DATA[dataType].map(({ id, name, image, kitchen,description }) => {
        return (
          <>
            <CardComponent {...{id, name, image, kitchen, description}} onItemClick={onItemClick}/>
          </>
        );
      })}
      </ul>
    </div>
  );

=======
import "./CardListStyle.css";

export default function CardList({ dataType }) {
	const { addToCart } = useCartContext();

	console.log(dataType, "dataType");

	if (DATA[dataType] === "SWEETS_DATA" || DATA[dataType] === "FOODS_DATA") {
		return (
			<div>
				<ul className="list">
					{DATA[dataType].map(({ id, name, image, kitchen, price }) => {
						return (
							<>
								<CardComponent
									{...{ id, name, image, kitchen, price }}
									addToCart={addToCart}
								/>
							</>
						);
					})}
				</ul>
			</div>
		);
	}

	return (
		<div>
			<ul className="list">
				{DATA[dataType].map(
					({ id, name, image, kitchen, description, price }) => {
						return (
							<>
								<CardComponent
									{...{ id, name, image, kitchen, description, price }}
									addToCart={addToCart}
								/>
							</>
						);
					}
				)}
			</ul>
		</div>
	);
>>>>>>> 42b9ae4fb42aeb1fbe9d036dbd5e5fb530eff710
}
