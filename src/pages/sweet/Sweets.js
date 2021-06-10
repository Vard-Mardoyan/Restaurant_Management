import { useEffect, useState } from "react";
import CardList from "../../components/card-list/CardList";
import Pagination from "../../components/pagination/Pagination";
import { DATA, SWEETS_DATA_FROM_LOCAL_STORAGE } from "../../helper/local-storage";

import "./SweetsStyle.css";

export default function Sweets() {
	const [data, setData] = useState(DATA["SWEETS_DATA_FROM_LOCAL_STORAGE"]);
	
	//console.log(SWEETS_DATA_FROM_LOCAL_STORAGE, "SWEETS_DATA_FROM_LOCAL_STORAGE");
	//console.log(DATA['SWEETS_DATA_FROM_LOCAL_STORAGE'], 'typeData-----');
  
	const [currentPage, setCurrentPage] = useState(1);
  const [perPageData] = useState(4);
  const [isLoading, setIsLoading] = useState(false); 

	// useEffect(() => {
	// 	setData("SWEETS_DATA_FROM_LOCAL_STORAGE");
	// }, []);

	const indexOfLastData = currentPage * perPageData;
  const indexOfFirstData = indexOfLastData  - perPageData;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);


	const paginate = (number) => setCurrentPage(number);

	return (
		<div className="sweet-container">
			<h1 className="title">Sweets </h1>
			<CardList dataType="SWEETS_DATA_FROM_LOCAL_STORAGE" paginatedData={currentData}/>
			<Pagination perPageData={perPageData} totalData={data} paginate={paginate} />
		</div>
	);
}

//<Pagination totalData={data} />

//https://rapidapi.com/ru/category/Food
//https://the-api-collective.com/category/food-and-drink
//https://docs.google.com/document/d/15MW5NrQbBTjbf3ammoWSTgJqzCOEpYHXhAaD988QCQk/edit
//https://the-api-collective.com/api/open-food-facts-api/
