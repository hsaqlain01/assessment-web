import Table from './components/table';
import React, { useState } from 'react';
import { limit } from '@/common/Constant';
import { Loader } from '@/components/loader';
import Pagination from '@/components/pagination';
import { useAllTodos } from '@/hooks/useAllTodos';
import Header from './components/header';

export default function TodoListing() {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useAllTodos(String(page), limit);
  const listing = data?.data;

  return (
    <section className='bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased'>
      <div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
        <div className='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden'>
          <Header />
          <div className='overflow-x-auto'>
            {isLoading && (
              <div className='flex justify-center items-center mx-auto max-w-screen-xl'>
                <Loader color='#1c4ed8' />
              </div>
            )}
            {data?.data && <Table page={page} data={data?.data} />}
          </div>
          {listing!?.data?.length > 0 && (
            <Pagination
              data={listing?.pagination!}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </section>
  );
}
