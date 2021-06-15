import { useEffect, useState } from "react";
import CardList from "../../components/card-list/CardList";
import Pagination from "../../components/pagination/Pagination";
import { getVisibleData } from "../../components/pagination/visible-data";
import { FOODS_DATA_FROM_LOCAL_STORAGE } from "../../helpers/local-storage";

import './FoodStyle.css';

export default function Food() {
  const [data, setData] = useState(FOODS_DATA_FROM_LOCAL_STORAGE);
  const [currentPage, setCurrentPage] = useState(1);
	const perPageData = 8;

	useEffect(() => {
		setData(data);
	}, [data]);

	const handlePageChange = (page, event) => {
		event.preventDefault();
		if(page !== currentPage)
		setCurrentPage(page);
	}


	const getPageData = () => {

		const paginationData = getVisibleData(data, currentPage, perPageData);

		return {
			totalData: data,
			slicedData: paginationData
		}
	};

	const {totalData, slicedData} = getPageData();

	
  const handleNextPage = () => {
    setCurrentPage((next) =>  next + 1);
  }


	const handlePreviousPage = () => {

    setCurrentPage((prev) => prev - 1 );

  }



  return (
    <div className='food-container'>
      <h1 className="title">Main Dishes</h1>
      <CardList data={slicedData}/>
      <Pagination 
				perPageData={perPageData} 
				totalData={totalData} 
				currentPage={currentPage}
				handlePageChange={handlePageChange} 
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
			/>
		</div>
  );
}

