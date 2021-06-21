import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchByDataName } from "../../service/data";

export default function ItemDetailedDescription() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { dataId } = useParams();
  // const [dataOfDrinks, setDataOfDrinks]  =  useState(loadState('DRINK_DATA_loc'));

  useEffect(() => {
    setLoading(true);

    searchByDataName(dataId)
      .then((info) => {
        console.log(info, "infoDrink:::description");

        setData(info);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {/* {data.map(({name, id}) => {
        return (
          <div key={id}>
            <h2>{name}</h2>
          </div>
        )
      })} */}
      <h2>{data[0]?.name}</h2>
      <p>{data[0]?.id}</p>
    </div>
  )
}

// import {BASE_URL} from "./config";

// export const getAllCountries = () => {

//   return fetch(`${BASE_URL}/all`).then((response) => response.json());
// };

// export const searchByCountryName = (name) => {

//   return fetch(`${BASE_URL}/name/${name}`).then((response) => response.json());
// };

//export const BASE_URL = 'https://restcountries.eu/rest/v2';
