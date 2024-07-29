import React from 'react';
import PaginationButton from './PaginationButton';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { IPaginationButtons } from '../interfaces/pagination-buttons.interface';

const PaginationButtons = ({
  data,
  handlePageChange,
  handleNextPage,
  handlePrevPage,
}: IPaginationButtons) => {
  const buttonsToShow = 7;

  const halfButtonsToShow = Math.floor(buttonsToShow / 2);
  let startPage = Math.max(data?.page - halfButtonsToShow, 1);
  let endPage = Math.min(data?.page + halfButtonsToShow, data?.totalPages);

  if (endPage - startPage < buttonsToShow - 1) {
    if (startPage === 1) {
      endPage = buttonsToShow;
    } else {
      startPage = endPage - buttonsToShow + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    if (data?.totalPages >= i) {
      pageNumbers.push(i);
    }
  }

  const lastTwoButtons = [];
  for (let i = Math.max(data?.totalPages - 1, 1); i <= data?.totalPages; i++) {
    if (!pageNumbers.includes(i)) {
      lastTwoButtons.push(i);
    }
  }

  return (
    <div className='2xl:flex lg:flex md:flex sm:flex-initial xs:flex-initial xxs:flex-initial items-center justify-between w-full md:px-2'>
      <div>
        <p className='text-sm text-white sm:mb-2 2xl:mb-0 lg:mb-0'>
          Showing{' '}
          <span className='font-medium'>
            {data ? data?.page * data?.limit - data?.limit + 1 : 0}
          </span>{' '}
          to{' '}
          <span className='font-medium'>
            {data ? Math.min(data?.page * data?.limit, data?.totalRecords) : 0}
          </span>{' '}
          of{' '}
          <span className='font-medium'>{data ? data?.totalRecords : 0}</span>{' '}
          results
        </p>
      </div>

      <div>
        <nav
          className='isolate inline-flex -space-x-px rounded-md shadow-sm pt-2'
          aria-label='Pagination'
        >
          <button onClick={handlePrevPage} className='pagination-button'>
            <ChevronLeftIcon className='pagination-icon' aria-hidden='true' />
          </button>

          {pageNumbers.map((page) => (
            <PaginationButton
              key={page}
              handleButtonClick={() => handlePageChange(page)}
              page={page}
              isActive={data?.page === page}
            />
          ))}

          {pageNumbers.length < data?.totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < data?.totalPages - 2 && (
                <span className='relative inline-flex items-center px-2 py-1 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0'>
                  . . .
                </span>
              )}
              {lastTwoButtons.map((page) => (
                <PaginationButton
                  key={page}
                  handleButtonClick={() => handlePageChange(page)}
                  page={page}
                  isActive={data?.page === page}
                />
              ))}
            </>
          )}

          <button onClick={handleNextPage} className='pagination-button'>
            <ChevronRightIcon className='pagination-icon' aria-hidden='true' />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default PaginationButtons;
