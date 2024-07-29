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
    <div className='pagination-container flex items-center bg-primary-700 justify-between border border-gray-20 px-2 py-2 sm:px-2 sm:flex-initial'>
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
