import CardBeerComponent from "../card/CardBeer";
import "./CardListStyle.css";

export default function CardListBeer({ addToCart, items }) {
	return (
		<div>
			<ul className="list">
				{items.map(
					({ id, name, description, image_url, volume, price, hops }) => {
						return (
							<div key={id}>
								<CardBeerComponent
									{...{
										id,
										name,
										description,
										image_url,
										volume,
										// price,
										hops,
									}}
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
