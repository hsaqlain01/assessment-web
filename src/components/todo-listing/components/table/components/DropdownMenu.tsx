import React from 'react';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';

export default function DropdownMenu({
  page,
  id,
  isDropdownOpen,
  setIsDropdownOpen,
}: {
  page: number;
  id: number;
  isDropdownOpen: number | null;
  setIsDropdownOpen: any;
}) {
  const toggleDropdown = (id?: number) => {
    if (isDropdownOpen === id) {
      setIsDropdownOpen(null);
    } else {
      setIsDropdownOpen(id);
    }
  };

  return (
    <td className='px-4 py-3 flex items-center justify-end relative'>
      <button
        id='apple-imac-27-dropdown-button'
        onClick={() => toggleDropdown(id)}
        className='inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100'
        type='button'
      >
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
        </svg>
      </button>
      {isDropdownOpen === id && (
        <div
          id='apple-imac-27-dropdown'
          className='absolute left-0 mt-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
          style={{ top: '100%' }}
        >
          <ul
            className='py-1 text-sm'
            aria-labelledby='apple-imac-27-dropdown-button'
          >
            <UpdateTodo id={id} setIsDropdownOpen={setIsDropdownOpen} />
            <DeleteTodo
              id={id}
              page={page}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          </ul>
        </div>
      )}
    </td>
  );
}
