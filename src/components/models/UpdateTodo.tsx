import { Loader } from '../loader';
import { useFormik } from 'formik';
import { notify } from '@/utils/toast';
import FormInput from '../common/FormInput';
import { GetOneTodo } from '@/api/todo/GetOne';
import { UpdateTodo } from '@/api/todo/Update';
import FormTextarea from '../common/FormTextarea';
import ModelHeader from './components/ModelHeader';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createValidationSchema } from './validations/CreateSchema';
import { IApiResponse } from '@/interfaces/api-response.interface';
import { ICreateTodo } from '@/interfaces/todo/create.interface';

export default function UpdateTodoModal({
  id,
  handleToggleModal,
  setIsDropdownOpen,
}: {
  id: number;
  handleToggleModal: () => void;
  setIsDropdownOpen: any;
}) {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const { data } = useQuery<IApiResponse<ICreateTodo>>(['todo', id], () =>
    GetOneTodo(String(id))
  );

  const mutationUpdate = useMutation(
    (formValues: any) => UpdateTodo(formValues, String(id)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
        handleToggleModal();
        setIsDropdownOpen(null);
        notify('success', 'Todo Updated Successfully.');
      },
      onError: () => {
        notify('danger', 'Something went wrong.');
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: createValidationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      mutationUpdate.mutate(values, {
        onSettled: () => {
          setLoading(false);
        },
      });
    },
  });

  useEffect(() => {
    if (data && data.data) {
      formik.setValues({
        title: data.data.title,
        description: data.data.description,
      });
    }
  }, [data]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div
      id='createProductModal'
      tabIndex={-1}
      aria-hidden='true'
      className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full'
    >
      <div className='relative p-4 w-full max-w-2xl max-h-full'>
        <div className='relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'>
          <ModelHeader
            title='Update Todo'
            handleToggleModal={handleToggleModal}
          />
          <form onSubmit={handleSubmit}>
            <div className='grid gap-4 mb-4 sm:grid-cols-2'>
              <FormInput
                inputlable='Title'
                placeholder='Example'
                value={values.title}
                type='text'
                name='title'
                onChangeHandler={handleChange}
                error={errors.title && touched.title ? errors.title : ''}
              />
              <FormTextarea
                inputlable='Description'
                placeholder='Write your description here'
                value={values.description}
                name='description'
                onChangeHandler={handleChange}
                error={
                  errors.description && touched.description
                    ? errors.description
                    : ''
                }
              />
            </div>
            <button
              type='submit'
              className='text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              <div>
                {loading ? (
                  <Loader />
                ) : (
                  <svg
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-1 -ml-1 w-6 h-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </div>
              Update todo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
