import React, { Fragment, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useFormik } from 'formik';

import { validationSchema } from '@/modules/todo-listing/validations/create-schema';
import TodoActionModal from '@/components/modal/todo-actions-modal';
import PlusSvg from '@/assets/icons/plus';
import { CreateTodo } from '@/api/todo/Create';
import { notify } from '@/utils/toast';

export default function AddTodo() {
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const mutationAdd = useMutation(CreateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      handleToggleModal();
      notify('success', 'Todo Created Successfully.');
    },
    onError: () => {
      notify('danger', 'Something went wrong.');
    },
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      mutationAdd.mutate(values, {
        onSettled: () => {
          setLoading(false);
        },
      });
    },
  });
  return (
    <Fragment>
      <button
        type='button'
        onClick={handleToggleModal}
        className='flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
      >
        <PlusSvg />
        Add Todo
      </button>

      {isOpen && (
        <TodoActionModal
          title='Add Todo'
          onClose={handleToggleModal}
          formik={formik}
          loading={loading}
        />
      )}
    </Fragment>
  );
}
