import Table from './components/table';
import Pagination from '../pagination';
import { GrayLoader } from '../loader';
import React, { useState } from 'react';
import Header from './components/Header';
import { limit } from '@/common/Constant';
import { useAllTodos } from '@/hooks/useAllTodos';

export default function TodoListing() {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useAllTodos(String(page), limit);

  return (
    <section className='bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased'>
      <div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
        <div className='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden'>
          <Header />
          <div className='overflow-x-auto'>
            {isLoading && <GrayLoader />}
            {data?.data && <Table page={page} data={data?.data} />}
          </div>
          {data && (
            <Pagination
              data={data?.data?.pagination}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </section>
  );
}
