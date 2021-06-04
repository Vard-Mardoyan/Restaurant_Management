import {CircularProgress} from "@material-ui/core";
import { useEffect, useState } from "react";
import CardList from "../../components/card-list/CardList";
import { getBeersData } from "../../service/data";
import CardListBeer from "../../components/card-list/CardListBeer";
import { DRINKS_DATA_FROM_LOCAL_STORAGE } from "../../helper/local-storage"; 
import "./DrinkStyle.css";

export default function Drink() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    getBeersData()
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
      <h1 className="title">Drinks</h1>
      <CardList dataType='DRINKS_DATA_FROM_LOCAL_STORAGE' />
      <CardListBeer items={data} />
    </>
  );
}