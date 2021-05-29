import {CircularProgress} from "@material-ui/core";
import { useEffect, useState } from "react";
import GetListOfBeer from "../components/GetListOfBeer";
import GetListOfDrink from "../components/GetListOfDrink";
import "./DrinkStyle.css";

export default function Drink() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.punkapi.com/v2/beers`)
      .then((response) => response.json())
      .then((info) => {
        //console.log(info, "infoDrink:::");

        setData(info);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if(isLoading) {
    return <CircularProgress />
  }

  if(error) {
    return <p className="error">{error}</p>
  }

  //console.log(data, "data");

  //const handleOnItemClick = () => {};
 
  return (
    <>
      <h1 className="title">Drink</h1>
      <GetListOfDrink />
      <GetListOfBeer items={data} />
    </>
  );
}