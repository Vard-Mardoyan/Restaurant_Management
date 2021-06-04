import { useEffect, useState } from "react";
import CardList from "../../components/card-list/CardList";
import Pagination from "../../components/pagination/Pagination";
import { SWEETS_DATA_FROM_LOCAL_STORAGE } from "../../helper/local-storage";

import './SweetsStyle.css';

export default function Sweets() {

  const [data, setData] = useState(SWEETS_DATA_FROM_LOCAL_STORAGE);
  console.log(SWEETS_DATA_FROM_LOCAL_STORAGE, 'SWEETS_DATA_FROM_LOCAL_STORAGE')


  return (
    <>
      <h1 className="title">Sweets </h1>
      <CardList dataType='SWEETS_DATA_FROM_LOCAL_STORAGE' />
    </>
  );


}


//<Pagination totalData={data} />


//https://rapidapi.com/ru/category/Food
//https://the-api-collective.com/category/food-and-drink
//https://docs.google.com/document/d/15MW5NrQbBTjbf3ammoWSTgJqzCOEpYHXhAaD988QCQk/edit
//https://the-api-collective.com/api/open-food-facts-api/
