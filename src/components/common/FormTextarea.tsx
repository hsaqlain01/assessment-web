import React from 'react';
import { IInput } from '@/interfaces/input.interface';

const FormTextarea = ({
  inputlable,
  placeholder,
  value,
  name,
  onChangeHandler,
  error,
  lableColor,
}: IInput) => {
  return (
    <div className='sm:col-span-2'>
      <label
        className={`block mb-2 text-sm font-medium ${
          lableColor
            ? 'text-white dark:text-white'
            : 'text-gray-900 dark:text-black'
        }`}
      >
        {inputlable}
      </label>
      <textarea
        rows={4}
        id={name}
        name={name}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder || inputlable}
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
      />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

export default FormTextarea;
