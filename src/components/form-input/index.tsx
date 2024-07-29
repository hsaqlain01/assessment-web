import React from 'react';
import { IInput } from '@/interfaces/input.interface';

const FormInput = ({
  inputLabel,
  placeholder,
  value,
  type,
  name,
  onChangeHandler,
  error,
  lableColor,
  rows,
}: IInput) => {
  const inputProps = {
    onChange: onChangeHandler,
    type,
    name,
    value,
    id: name,
    className:
      'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    placeholder: placeholder || inputLabel,
    required: false,
  };
  return (
    <div>
      <label
        className={`block mb-2 text-sm font-medium ${
          lableColor
            ? 'text-white dark:text-white'
            : 'text-gray-900 dark:text-black'
        }`}
      >
        {inputLabel}
      </label>
      {rows ? (
        <textarea rows={rows} {...inputProps} />
      ) : (
        <input {...inputProps} />
      )}
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

export default FormInput;
