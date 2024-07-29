import React from 'react';

export default function TableHeader() {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
      <tr>
        <th scope='col' className='px-4 py-4'>
          Title
        </th>
        <th scope='col' className='px-4 py-3'>
          Description
        </th>
        <th scope='col' className='px-4 py-3'>
          Actions
        </th>
      </tr>
    </thead>
  );
}
