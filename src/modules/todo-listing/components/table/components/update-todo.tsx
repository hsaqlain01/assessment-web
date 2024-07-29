import React, { Fragment, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useFormik } from 'formik';

import { limit } from '@/common/Constant';
import { validationSchema } from '@/modules/todo-listing/validations/create-schema';
import TodoActionModal from '@/components/modal/todo-actions-modal';
import EditSvg from '@/assets/icons/edit';
import { notify } from '@/utils/toast';
import { UpdateTodoApi } from '@/api/todo/Update';
import { ITodo } from '@/interfaces/todo/get-all.interface';

export default function UpdateTodo({
  item,
  page,
}: {
  item: ITodo;
  page: number;
}) {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const mutationUpdate = useMutation(
    (formValues: any) => UpdateTodoApi(formValues, String(item?.id)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos', String(page), limit]);
        handleToggleModal();
        notify('success', 'Todo Updated Successfully.');
      },
      onError: () => {
        notify('danger', 'Something went wrong.');
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      title: item?.title,
      description: item?.description,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      mutationUpdate.mutate(values, {
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
        className='py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
      >
        <EditSvg />
        Edit
      </button>

      {isOpen && (
        <TodoActionModal
          title='Update Todo'
          onClose={handleToggleModal}
          formik={formik}
          loading={loading}
        />
      )}
    </Fragment>
  );
}
