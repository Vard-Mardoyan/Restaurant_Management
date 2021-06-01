import { useEffect, useState } from "react";
import CardList from "../../components/card-list/CardList";
import Pagination from "../../components/pagination/Pagination";
import { FOODS_DATA } from "../../service/data";
import './FoodStyle.css';

export default function Food() {
  const [data, setData] = useState(FOODS_DATA);

  useEffect(() => {

  }, []);

  return (
    <>
      <h1 className="title">Main Dishes</h1>
      <CardList dataType='FOODS_DATA' />
      <Pagination totalData={data} />
    </>
  );
}