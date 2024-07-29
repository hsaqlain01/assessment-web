import UpdateTodo from './components/update-todo';
import DeleteTodo from './components/delete-todo';
import { IGetAllTodos } from '@/interfaces/todo/get-all.interface';
import TableHeader from './components/table-header';

export default function Table({
  page,
  data,
}: {
  page: number;
  data: IGetAllTodos;
}) {
  return (
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <TableHeader />
      <tbody>
        {data?.data?.map((item) => (
          <tr key={item.id} className='border-b dark:border-gray-700'>
            <th
              scope='row'
              className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white w-1/4'
            >
              {item.title}
            </th>
            <td className='px-4 py-3 max-w-[12rem] truncate w-1/2'>
              {item.description}
            </td>
            <td className='px-4 py-3 flex items-center relative w-1/4'>
              <div className='flex items-center space-x-4'>
                <UpdateTodo item={item} page={page} />

                <DeleteTodo id={item.id} page={page} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
