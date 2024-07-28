import React from 'react';
import { IInput } from '@/interfaces/input.interface';

const FormInput = ({
  inputlable,
  placeholder,
  value,
  type,
  name,
  onChangeHandler,
  error,
  lableColor,
}: IInput) => {
  return (
    <div>
      <label
        className={`block mb-2 text-sm font-medium ${
          lableColor
            ? 'text-white dark:text-white'
            : 'text-gray-900 dark:text-black'
        }`}
      >
        {inputlable}
      </label>
      <input
        onChange={onChangeHandler}
        type={type}
        name={name}
        value={value}
        id={name}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder={placeholder || inputlable}
        required={false}
      />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

export default FormInput;
