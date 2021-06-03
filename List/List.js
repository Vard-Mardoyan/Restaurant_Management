export default function List({ Items }) {
	return (
		<ul>
			{Items.map(({ name }) => {
				return <li key={name}> {name} </li>;
			})}
		</ul>
	);
}
