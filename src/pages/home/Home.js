import { RandomizedImages } from "../../components/RandomizedImages/RandomizedImages";
import "./HomeStyle.css";

export default function Home() {
	const title = 'Welcome our restaurant';
	
	return (
		<div>
			<h2 className="title">{`${title.toUpperCase()}`}</h2>
			<RandomizedImages />
		</div>
	);
}
