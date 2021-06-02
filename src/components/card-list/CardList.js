import { DATA } from "../../service/data";
import CardComponent from "../card/Card";
import "./CardListStyle.css";

export default function CardList({ onItemClick, dataType }) {
	console.log(dataType, "dataType");

	if (DATA[dataType] === "SWEERTS_DATA" || DATA[dataType] === "FOODS_DATA") {
		return (
			<div>
				<ul className="list">
					{DATA[dataType].map(({ id, name, image, kitchen, price }) => {
						return (
							<>
								<CardComponent
									{...{ id, name, image, kitchen, price }}
									onItemClick={onItemClick}
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
									onItemClick={onItemClick}
								/>
							</>
						);
					}
				)}
			</ul>
		</div>
	);
}






