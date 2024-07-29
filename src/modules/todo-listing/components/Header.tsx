import React from 'react';
import AddTodo from './add-todo';

export default function Header() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4'>
      <div className='w-full md:w-1/2'>
        <div className='flex items-center'>
          <span className='text-black text-2xl'>All Todo&apos;s List</span>
        </div>
      </div>
      <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
        <AddTodo />
      </div>
    </div>
  );
}
