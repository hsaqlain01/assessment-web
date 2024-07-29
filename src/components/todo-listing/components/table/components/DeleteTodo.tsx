'use client';

import { limit } from '@/common/Constant';
import React, { Fragment, useState } from 'react';
import { DeleteTodoApi } from '@/api/todo/Delete';
import { useMutation, useQueryClient } from 'react-query';
import DeleteTodoModal from '@/components/models/DeleteTodo';

export default function DeleteTodo({ id, page }: { id: number; page: number }) {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutationDelete = useMutation(DeleteTodoApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos', String(page), limit]);
    },
  });

  const handleDelete = async () => {
    await mutationDelete.mutateAsync(String(id));
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Fragment>
      <button
        type='button'
        onClick={toggleModal}
        className='flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4 mr-2 -ml-0.5'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
            clipRule='evenodd'
          />
        </svg>
        Delete
      </button>

      {isModalOpen && (
        <DeleteTodoModal
          toggleModal={toggleModal}
          handleDelete={handleDelete}
        />
      )}
    </Fragment>
  );
}
