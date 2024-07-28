import React, { Fragment, useState } from 'react';
import CreateTodoModal from '@/components/models/CreateTodo';

export default function AddTodo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <button
        type='button'
        onClick={handleToggleModal}
        className='flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
      >
        <svg
          className='h-3.5 w-3.5 mr-2'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
          />
        </svg>
        Add Todo
      </button>

      {isOpen && <CreateTodoModal handleToggleModal={handleToggleModal} />}
    </Fragment>
  );
}
