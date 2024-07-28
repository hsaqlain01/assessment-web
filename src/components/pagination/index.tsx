import React from 'react';
import PaginationButtons from './components/PaginationButtons';
import { PaginationProps } from './interfaces/pagination.interface';

const Pagination: React.FC<PaginationProps> = ({ data, page, setPage }) => {
  const handlePrevPage = () => {
    if (page && setPage) {
      const newPage = page - 1;
      setPage(newPage);
    }
  };

  const handleNextPage = () => {
    if (page && setPage && data) {
      const newPage = page + 1;
      if (newPage <= data.totalPages) {
        setPage(newPage);
      }
    }
  };

  const handlePageChange = (currentPage: number) => {
    if (setPage) {
      setPage(currentPage);
    }
  };

  return (
    <div className='pagination-container flex items-center bg-gray-400 justify-between border border-gray-20 px-2 py-2 sm:px-2 sm:flex-initial'>
      <div className='pagination-buttons flex flex-1 justify-between sm:hidden xs:hidden xxs:hidden'>
        <button
          onClick={handlePrevPage}
          className='pagination-button-prev relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white'
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className='pagination-button-next relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        >
          Next
        </button>
      </div>
      {data && (
        <PaginationButtons
          data={data}
          handlePageChange={handlePageChange}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      )}
    </div>
  );
};

export default Pagination;
