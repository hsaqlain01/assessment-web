'use client';

import { limit } from '@/common/Constant';
import React, { Fragment, useState } from 'react';
import { DeleteTodoApi } from '@/api/todo/Delete';
import { useMutation, useQueryClient } from 'react-query';
import DeleteSvg from '@/assets/icons/delete';
import ModalLayout from '@/components/modal';

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
        <DeleteSvg />
        Delete
      </button>

      {isModalOpen && (
        <ModalLayout
          title='Are you sure you want to delete this modal?'
          onClose={toggleModal}
          ignoreFooter={false}
          onSubmit={handleDelete}
        />
      )}
    </Fragment>
  );
}
