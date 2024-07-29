'use client';

import Link from 'next/link';
import { useFormik } from 'formik';
import React, { useState } from 'react';

import { notify } from '@/utils/toast';
import { registerAuth } from '@/lib/RegisterAuth';
import { Loader } from '@/components/loader';
import FormCardTheme from '@/components/form-card-theme';
import FormInput from '@/components/form-input';
import { registerValidationSchema } from '../validations/schemas';

export default function Register() {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formValues: any) => {
    try {
      setLoading(true);
      const data = await registerAuth(formValues);

      if (data) {
        notify('success', 'User Successfully Registered.');
        window.location.href = '/';
      } else {
        notify('danger', 'User already exists.');
      }
    } catch (error) {
      notify('danger', 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      await handleFormSubmit(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <FormCardTheme title=' Create an account'>
      <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
        <FormInput
          inputLabel='Username'
          placeholder='John_doe'
          value={values.username}
          type='text'
          name='username'
          onChangeHandler={handleChange}
          error={errors.username && touched.username ? errors.username : ''}
        />
        <FormInput
          inputLabel='Email'
          placeholder='example@gmail.com'
          value={values.email}
          type='email'
          name='email'
          onChangeHandler={handleChange}
          error={errors.email && touched.email ? errors.email : ''}
        />
        <FormInput
          inputLabel='Password'
          placeholder='••••••'
          value={values.password}
          type='password'
          name='password'
          onChangeHandler={handleChange}
          error={errors.password && touched.password ? errors.password : ''}
        />
        <button
          type='submit'
          disabled={loading}
          className='w-full flex items-center justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
        >
          {loading && (
            <span className='mr-2'>
              <Loader width={25} height={25} />
            </span>
          )}
          Create an account
        </button>
        <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
          Already have an account?{' '}
          <Link
            href='/login'
            className='font-medium text-primary-600 hover:underline dark:text-primary-500'
          >
            Login here
          </Link>
        </p>
      </form>
    </FormCardTheme>
  );
}
