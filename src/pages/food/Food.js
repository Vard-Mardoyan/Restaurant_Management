import { useEffect, useState } from "react";
import CardList from "../../components/card-list/CardList";
import Pagination from "../../components/pagination/Pagination";
import { FOODS_DATA_FROM_LOCAL_STORAGE } from "../../helper/local-storage";

import './FoodStyle.css';

export default function Food() {
  const [data, setData] = useState(FOODS_DATA_FROM_LOCAL_STORAGE);

  useEffect(() => {

  }, []);

  return (
    <div className='food-container'>
      <h1 className="title">Main Dishes</h1>
      <CardList dataType='FOODS_DATA_FROM_LOCAL_STORAGE' />
    </div>
  );
}

//<Pagination totalData={data} />