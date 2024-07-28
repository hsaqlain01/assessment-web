import React, { useState } from 'react';
import UpdateTodoModal from '@/components/models/UpdateTodo';

export default function UpdateTodo({
  id,
  setIsDropdownOpen,
}: {
  id: number;
  setIsDropdownOpen: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <button
        type='button'
        onClick={handleToggleModal}
        className='flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200'
      >
        <svg
          className='w-4 h-4 mr-2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
          />
        </svg>
        Edit
      </button>

      {isOpen && (
        <UpdateTodoModal
          id={id}
          handleToggleModal={handleToggleModal}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </li>
  );
}
