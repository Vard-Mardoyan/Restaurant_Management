//import { List } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
// import { getAllCountries } from "../../components/services/countries";
// import { FetchActionTypes } from "../../helpers/action-types";
import { loadState } from "../../helpers/local-storage";
import { BASE_URL } from "../../service/config";

export default function SearchComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sweetsData, setSweetsData] = useState(loadState("SWEETS_DATA_loc"));
  const [foodData, setFoodData] = useState(loadState("FOODS_DATA_loc"));
  const [drinksData, setDrinkData] = useState(loadState("DRINK_DATA_loc"));

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
		let clear = '';
		setSearchValue(clear);
	};


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

  const renderFilteredData = (arr) => {
    return arr?.map(({ name, image, image_url }) => {
      return (
        <div key={name}>
          <img
            width={image ? "40" : "20"}
            alt={name}
            src={image || image_url}
          />{" "}
          {name}
        </div>
      );
    });
  };

  return (
    <form onReset={handleOnReset}>
      <div className="search-container">
        <input
          value={searchValue || ""}
          onChange={(event) => {
            handleSearchUpdate(event);
          }}
          placeholder="Search"
        />
        <ul className="search-data">
          {renderFilteredData(filteredSweetsDataNames)}
          {renderFilteredData(filteredFoodDataNames)}
          {renderFilteredData(filteredDrinksDataNames)}
          {renderFilteredData(filteredDataNames)}
        </ul>
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
