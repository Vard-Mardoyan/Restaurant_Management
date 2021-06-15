import { useState } from "react";

const  usePagination = ({perPageData, totalData}) => {

  const perPage = perPageData ? perPageData : 5;
  const pages = Math.ceil(totalData.length / perPage);
  const pagination = [];
  
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([...totalData].slice(currentPage - 1) * perPage, currentPage * perPage);

  let left = false;
  let right = false;

  for(let i = 1; i <= pages; i++) {
    if(i === currentPage) {
      pagination.push({
        id: i,
        current: true,
        points: false
      });
    } else {

      if( i < 2 || i > pages - 1  || i === currentPage - 1 || i === currentPage + 1 ) {

        pagination.push({
          id: i,
          current: false,
          points: false
        });

      } else if(i > 1 && i < currentPage && !left ) {
        pagination.push({
          id: i,
          current: false,
          points: true
        });
        left = true;
      } else if(i < pages && i > currentPage && !right) {
        pagination.push({
          id: i,
          current: false,
          points: true,
        });

        right = true;
      }
    }
  }

  const handlePageChange = (page, event) => {
    event.preventDefault();
    if(page !== currentPage) {
      setCurrentPage(page);

      setData([...totalData].slice(page - 1) * perPage, page * perPage );
    }
  };

  const handlePreviousPage = (event) => {
    event.preventDefault();

    setCurrentPage((prev) => prev - 1 === 0 ? prev : prev - 1);
    if(currentPage !== 1) {
      setData([...totalData].slice(currentPage - 2) * perPage, (currentPage - 1 ) * perPage)
    }
  }

  const handleNextPage = (event) => {
    event.preventDefault();

    setCurrentPage((next) => next ? next : next + 1);

    setData([...totalData].slice(currentPage * perPage, (currentPage + 1) * perPage ));
  }


  return {
    data,
    pagination,
    handlePreviousPage,
    handleNextPage,
    handlePageChange,

  }

};
export default usePagination;