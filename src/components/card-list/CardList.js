import { useCartContext } from "../../context/cart/CartState";
import { DATA } from "../../service/data";
import CardComponent from "../card/Card";


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
							<div key={id}>
								<CardComponent
									{...{ id, name, image, kitchen, price }}
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
				{DATA[dataType].map(
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
