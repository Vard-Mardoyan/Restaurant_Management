import { List } from "@material-ui/core";
import { useEffect, useReducer, useState } from "react";
import { getAllCountries } from "../../components/services/countries";
import { FetchActionTypes } from "../../helper/action-types";

const initialState = {
	search: "",
	countries: [],
	isLoading: false,
	error: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case FetchActionTypes.TYPE_SEARCH: {
			console.log(action);
			let newCountries = state.countries.filter((item) => {
				// console.log(item.name.includes(action.value), item.name, action.value);
				return item.name.includes(action.value);
			});
			console.log("newCountries", newCountries);

			return { ...state, countries: newCountries };
		}
		case FetchActionTypes.success:
			return {
				...state,
				countries: action.payload.value,
				error: false,
				isLoading: false,
			};
		case FetchActionTypes.failure:
			return {
				...state,
				// countries: action.value,
				error: true,
				isLoading: false,
			};
		default:
			return state;
	}
};
export default function Countries() {
	const [inputValue, setInputValue] = useState("");
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		const fetchData = () => {
			// dispatch({
			// 	type: FetchActionTypes.TYPE_SEARCH,
			// 	payload: { value: d.value },
			// });
			getAllCountries()
				.then((data) => {
					console.log(data);
					dispatch({
						type: FetchActionTypes.success,
						payload: {
							value: data,
							isLoading: true,
							error: false,
						},
					});
				})
				.catch((e) => {
					dispatch({
						type: FetchActionTypes.failure,
						payload: { error: e },
					});
				});
			// fetchData();
		};
		fetchData();
	}, []);
	// console.log(state, "state");
	const onChange = (event) => {
		setInputValue(event.target.value);
		dispatch({
			type: FetchActionTypes.TYPE_SEARCH,
			value: event.target.value,
		});
	};
	const filteredItems = !state.search ? state.countries : [state.search];
	// if (state.isLoading) {
	// 	return <p>Loading...</p>;
	// }
	// if (state.error) {
	// 	return <p>{state.error}</p>;
	// }
	// const handleCountriesClick = (countryName) => {
	// 	history.push(`/countries/${countryName}`);
	// };
	return (
		<div>
			<input
				value={inputValue}
				type="text"
				placeholder="Search"
				onChange={onChange}
			/>
			{/* {state.isLoading ? (
				<p>Loading...</p>
			) : <p>{state.error}</p> ? (
				<p> Search data</p>
			) : ( */}
			<List Items={filteredItems} />
			{/* )} */}
		</div>
	);
}
