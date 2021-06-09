// import { getAllCountries } from "../service/countries";
import { useEffect, useState, useReducer } from "react";
import { FetchActionTypes } from "../helpers/action-types";

const initialState = {
	data: [],
	search: "",
	isLoading: false,
	error: "",
};

const countriesReducer = (state, action) => {
	switch (action.type) {
		case FetchActionTypes.started:
			let newCountries = state.data.filter((item) => {
				console.log(item.name.includes(action.value), item.name, action.value);
				return item.name.toLowerCase().includes(action.value.toLowerCase());
			});
			return { ...state, data: newCountries, isLoading: true };
		case FetchActionTypes.success:
			// return { ...state, data: action.data, isLoading: false };
			return { ...state, data: action.payload.value, isLoading: false };

		case FetchActionTypes.failure:
			return { ...state, error: action.error, isLoading: false };

		default:
			// return initialState;
			return state;
	}
};

export const useSearch = () => {
	const [countriesState, dispatch] = useReducer(countriesReducer, initialState);
	const [inputValue, setInputValue] = useState("");

	useEffect((getData) => {
		const fetchData = () => {
			dispatch({ type: "started" });
			getData()
				.then((d) => {
					// dispatch({ type: "success", data: d });
					dispatch({
						type: "success",
						payload: { value: d, isLoading: false, error: false },
					});
				})
				.catch((e) => dispatch({ type: "failure", payload: { error: e } }));
		};
		fetchData();
	}, []);

	// useEffect(() => {
	// 	const filteredItems = !countriesState.search
	// 		? countriesState.data
	// 		: [countriesState.search];
	// }, []);

	const onChange = (event) => {
		setInputValue(event.target.value);
		dispatch({
			type: FetchActionTypes.started,
			value: event.target.value,
		});
	};
	return { inputValue, onChange, setInputValue };
};

export default useSearch;
// const { inputValue, dispatch, setInputValue } = useSearch(getCollections);
// const countriesInput = useSearh(getAllCountries)

// <input {...countriesInput} />
