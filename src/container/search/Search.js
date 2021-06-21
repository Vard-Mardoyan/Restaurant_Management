//import { List } from "@material-ui/core";
import { CircularProgress} from "@material-ui/core";
import { useState } from "react";
// import { getAllCountries } from "../../components/services/countries";
// import { FetchActionTypes } from "../../helpers/action-types";
import { loadState } from "../../helpers/local-storage";
import { BASE_URL } from "../../service/config";
import CardList from "../../components/card-list/CardList";

export default function SearchContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sweetsData, setSweetsData] = useState(loadState("SWEETS_DATA_loc"));
  const [foodData, setFoodData] = useState(loadState("FOODS_DATA_loc"));
  const [drinksData, setDrinkData] = useState(loadState("DRINK_DATA_loc"));
  const [isSearchData, setIsSearchData] = useState(true);

  useState(() => {
    setIsLoading(true);
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((info) => {
        setData(info);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [data]);

  useState(() => {
    setSweetsData(sweetsData);
    setFoodData(foodData);
    setDrinkData(drinksData);
  }, [sweetsData, foodData, drinksData]);

  const handleSearchUpdate = (event) => {
    let value = event.target.value;
    setSearchValue(value);
  };

  const handleOnReset = () => {
    let clear = "";
    setSearchValue(clear);
  };
  const handleOnClick = () => setIsSearchData(false);

  const filterNames = (arr) => {
    return !searchValue
      ? arr.map(({ name }) => name)
      : arr.filter(({ name }) =>
          name.toLowerCase().match(searchValue.toLowerCase())
        );
  };

  const filteredDataNames = filterNames(data);
  const filteredSweetsDataNames = filterNames(sweetsData);
  const filteredFoodDataNames = filterNames(foodData);
  const filteredDrinksDataNames = filterNames(drinksData);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error !== "") {
    return (
      <div>
        <p className="error">{error}</p>
      </div>
    );
  }

  //style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}

  return (
    <form onReset={handleOnReset} >
      <div className="search-container" key="searchInput">
        <input
          type="text"
          value={searchValue}
          onChange={(event) => {
            handleSearchUpdate(event);
          }}
          onClick={handleOnClick}
          placeholder="Search"
          className="search-input"
          name="search"
        />
        <div key="search">
          {!isSearchData ? <CardList data={filteredSweetsDataNames} key="sweetsData" /> : null}
          {!isSearchData ? <CardList data={filteredFoodDataNames } key="foodData"/> : null}
          {!isSearchData ? <CardList data={filteredDrinksDataNames } key="drinksData" /> : null}
          {!isSearchData ? <CardList data={filteredDataNames } key="beerApi"/>  : null}

        </div>
      </div>
    </form>
  );
}

// const initialState = {
// 	search: "",
// 	data: [],
// 	isLoading: false,
// 	error: false,
// };

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case FetchActionTypes.TYPE_SEARCH: {
// 			console.log(action);
// 			let newData = state.data.filter((item) => {
// 				// console.log(item.name.includes(action.value), item.name, action.value);
// 				return item.name.includes(action.value);
// 			});
// 			console.log("newData", newData);

// 			return { ...state, data: newData };
// 		}
// 		case FetchActionTypes.success:
// 			return {
// 				...state,
// 				data: action.payload.value,
// 				error: false,
// 				isLoading: false,
// 			};
// 		case FetchActionTypes.failure:
// 			return {
// 				...state,
// 				// data: action.value,
// 				error: true,
// 				isLoading: false,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export default function SearchComponent() {
// 	const [inputValue, setInputValue] = useState("");
// 	const [state, dispatch] = useReducer(reducer, initialState);
// 	useEffect(() => {
// 		const fetchData = () => {
// 			// dispatch({
// 			// 	type: FetchActionTypes.TYPE_SEARCH,
// 			// 	payload: { value: d.value },
// 			// });
// 			fetch(BASE_URL).then((response) => response.json())
// 				.then((data) => {
// 					console.log(data);
// 					dispatch({
// 						type: FetchActionTypes.success,
// 						payload: {
// 							value: data,
// 							isLoading: true,
// 							error: false,
// 						},
// 					});
// 				})
// 				.catch((e) => {
// 					dispatch({
// 						type: FetchActionTypes.failure,
// 						payload: { error: e },
// 					});
// 				});
// 			// fetchData();
// 		};
// 		fetchData();
// 	}, []);
// 	// console.log(state, "state");
// 	const onChange = (event) => {
// 		setInputValue(event.target.value);
// 		dispatch({
// 			type: FetchActionTypes.TYPE_SEARCH,
// 			value: event.target.value,
// 		});
// 	};
// 	const filteredItems = !state.search ? state.data : [state.search];
// 	// if (state.isLoading) {
// 	// 	return <p>Loading...</p>;
// 	// }
// 	// if (state.error) {
// 	// 	return <p>{state.error}</p>;
// 	// }
// 	// const handleCountriesClick = (countryName) => {
// 	// 	history.push(`/countries/${countryName}`);
// 	// };
// 	return (
// 		<div>
// 			<input
// 				value={inputValue}
// 				type="text"
// 				placeholder="Search"
// 				onChange={onChange}
// 			/>
// 			{/* {state.isLoading ? (
// 				<p>Loading...</p>
// 			) : <p>{state.error}</p> ? (
// 				<p> Search data</p>
// 			) : ( */}
// 			<List Items={filteredItems} />
// 			{/* )} */}
// 		</div>
// 	);
// }
