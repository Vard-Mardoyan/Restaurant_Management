import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import './PaginationStyle.css';



export default function Pagination({perPageData, totalData, paginate}) {
  const pages = [];

  for(let i = 1; i <= Math.ceil(totalData.length / perPageData); i++){
    pages.push(i);
  }
  
  //console.log(totalData, 'data::');
  // const handlePageChange = (event) => {
  //   const pageNumber = Number(event.target.id);
  //   setCurrentPage(pageNumber);
  // };

  const renderPageNumber = pages.map((number) => {
    return (
      <span
        key={number}
        id={number}
        onClick={() => paginate(number)}
      >
        {number}
      </span>
    );
  });

  return (
    <nav>
      <ul className="pagination">{renderPageNumber}</ul>
    </nav>
  )

}

// export default function Pagination({totalData}) {
//   //console.log(totalData, 'totalData:::');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPageData, setPerPageData] = useState(8);
//   const [isLoading, setIsLoading] = useState(false); 

//   useEffect(() => {
//     // Define last page
//   }, [totalData])


//   let pages = [];
//   for(let i = 1; i < Math.ceil(totalData.length / perPageData); i++){
//     pages.push(i);
//   }
//   //console.log(pages, 'pages:::');
  
//   const handlePageChange = (event) => {
//     const pageNumber = Number(event.target.id);
//     setCurrentPage(pageNumber);
//   };

//   const indexOfLastData = currentPage * perPageData;
//   const indexOfFirstData = indexOfLastData  - perPageData;
//   const currentData = totalData.slice(indexOfFirstData, indexOfLastData);

//   const renderPageNumber = pages.map((number) => {
//     return (
//       <span
//         key={number}
//         id={number}
//         className={currentPage === number ? "active" : null}
//         onClick={handlePageChange}
//       >
//         {number}
//       </span>
//     );
//   });

//   const  handlePreviousPage = () => {
//     setIsLoading(true);
//     setCurrentPage((prev) => prev - 1);
//     setIsLoading(false);

//   }

//   const handleNextPage = () => {
//     setIsLoading(true);
//     setCurrentPage((next) => next + 1);
//     setIsLoading(false);
//   }

//   if(isLoading) {
//     return <CircularProgress />
//   }
//   return (
//     <>
//       <ul className="pagination">{renderPageNumber}</ul>
//       <div className="btn">
//         <button onClick={handlePreviousPage} className="prev-button">Prev</button>
//         <button onClick={handleNextPage}className="next-button">Next</button>
//       </div>

//     </>
//   )

// }