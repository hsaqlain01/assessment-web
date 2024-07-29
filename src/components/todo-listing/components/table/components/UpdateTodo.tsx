import React, { Fragment, useState } from 'react';
import UpdateTodoModal from '@/components/models/UpdateTodo';

export default function UpdateTodo({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <button
        type='button'
        onClick={handleToggleModal}
        className='py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4 mr-2 -ml-0.5'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
          <path
            fillRule='evenodd'
            d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
            clipRule='evenodd'
          />
        </svg>
        Edit
      </button>

      {isOpen && (
        <UpdateTodoModal id={id} handleToggleModal={handleToggleModal} />
      )}
    </Fragment>
  );
}
