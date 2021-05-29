import { useEffect, useState } from "react";
import GetListOfSweets from "../components/GetListOfSweets";
import Pagination from "../components/Pagination";
import { SWEERTS_DATA } from "../service/data";
import './SweetsStyle.css';

export default function Sweets() {

  const [data, setData] = useState(SWEERTS_DATA);

  // useEffect(() => {
  //   fetch("https://foodish-api.herokuapp.com/api/")
  //     .then((response) => response.json())
  //     .then((info) => {
  //       console.log(info, 'info:::');
  //       setData(info);

  //     });
  // }, []);

  //console.log(data, "data::::");// single  random data // random food pictures as placeholders.

  return (
    <>
      <h1 className="title">Sweets </h1>
      <Pagination totalData={data} />
    </>
  );


}

// {Object.entries(data).map(([key, value], index) => {

//   return (
//     <div key={index}>
//       <img src={value} alt={key} width="200" />
//     </div>
//   )
// })}

//https://rapidapi.com/ru/category/Food
//https://the-api-collective.com/category/food-and-drink
//https://docs.google.com/document/d/15MW5NrQbBTjbf3ammoWSTgJqzCOEpYHXhAaD988QCQk/edit
//https://the-api-collective.com/api/open-food-facts-api/
