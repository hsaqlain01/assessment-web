import { useState } from 'react';
import TableHeader from './components/Header';
import DropdownMenu from './components/DropdownMenu';
import { IGetAllTodos } from '@/interfaces/todo/get-all.interface';

export default function Table({
  page,
  data,
}: {
  page: number;
  data: IGetAllTodos;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<number | null>(null);

  return (
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <TableHeader />
      <tbody>
        {data?.data?.map((item) => (
          <tr key={item.id} className='border-b dark:border-gray-700'>
            <th
              scope='row'
              className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              {item.title}
            </th>
            <td className='px-4 py-3 max-w-[12rem] truncate'>
              {item.description}
            </td>
            <DropdownMenu
              page={page}
              id={item.id}
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
