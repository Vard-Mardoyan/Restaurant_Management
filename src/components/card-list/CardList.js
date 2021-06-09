import { useCartContext } from "../../context/cart/CartState";
import {DATA} from "../../helper/local-storage";
import CardComponent from "../card/Card";


import "./CardListStyle.css";

export default function CardList({ dataType }) {
	const { addToCart } = useCartContext();

	console.log(dataType, "dataType");

	if (DATA[dataType] === "SWEETS_DATA_FROM_LOCAL_STORAGE" || DATA[dataType] === "FOODS_DATA_FROM_LOCAL_STORAGE") {
		return (
			<div>
				<ul className="list">
					{DATA[dataType]?.map(({ id, name, image, kitchen, price, quantity }) => {
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
			</div>
		);
	}

	return (
		<div>
			<ul className="list">
				{DATA[dataType]?.map(
					({ id, name, image, kitchen, description, price }) => {
						return (
							<div key={id}>
								<CardComponent
									{...{ id, name, image, kitchen, description, price }}
									addToCart={addToCart}
								/>
							</div>
						);
					}
				)}
			</ul>
		</div>
	);

}
