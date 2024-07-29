import React from 'react';

import FormInput from '@/components/form-input';
import { ITodo } from '@/interfaces/todo/get-all.interface';
import { Loader } from '@/components/loader';
import ModalLayout from '..';

const TodoActionModal = ({
  title,
  onClose,
  formik,
  loading,
  buttonTitle,
}: {
  title: string;
  onClose: () => void;
  formik: any;
  loading: boolean;
  buttonTitle?: string;
}) => {
  const onSubmit = (values: ITodo | any) => {
    handleSubmit(values);
  };
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <ModalLayout onClose={onClose} title={title}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-4 mb-4 grid-cols-1 sm:grid-cols-1'>
          <FormInput
            inputLabel='Title'
            placeholder='Title'
            value={values.title}
            type='text'
            name='title'
            onChangeHandler={handleChange}
            error={errors.title && touched.title ? errors.title : ''}
          />
          <FormInput
            rows={4}
            inputLabel='Description'
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
          <div>{loading ? <Loader width={22} height={22} /> : <div />}</div>
          {buttonTitle || title}
        </button>
      </form>
    </ModalLayout>
  );
};

export default TodoActionModal;
