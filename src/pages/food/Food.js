import { useEffect, useState } from "react";
import CardList from "../../components/card-list/CardList";
import Pagination from "../../components/pagination/Pagination";
import { getVisibleData } from "../../components/pagination/visible-data";
import { FOODS_DATA_FROM_LOCAL_STORAGE } from "../../helper/local-storage";
import { PER_PAGE_DATA } from "../../service/config";

import './FoodStyle.css';

export default function Food() {
  const [data, setData] = useState(FOODS_DATA_FROM_LOCAL_STORAGE);
  const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setData(data);
	}, [data]);

	const handlePageChange = (page, event) => {
		event.preventDefault();
		if(page !== currentPage)
		setCurrentPage(page);
	}


	const getPageData = () => {

		const paginationData = getVisibleData(data, currentPage, PER_PAGE_DATA);

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
				perPageData={PER_PAGE_DATA} 
				totalData={totalData} 
				currentPage={currentPage}
				handlePageChange={handlePageChange} 
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
			/>
		</div>
  );
}

