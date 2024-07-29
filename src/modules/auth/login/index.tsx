'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { notify } from '@/utils/toast';

import { loginAuth } from '@/lib/LoginAuth';
import { Loader } from '@/components/loader';
import FormCardTheme from '@/components/form-card-theme';
import FormInput from '@/components/form-input';
import { loginValidationSchema } from '../validations/schemas';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formValues: any) => {
    try {
      setLoading(true);
      const data = await loginAuth(formValues);

      if (data) {
        window.location.href = '/';
        notify('success', 'User logged in successfully.');
      }
    } catch (error) {
      notify('danger', 'User not found. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      await handleFormSubmit(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <FormCardTheme title='Sign in to your account'>
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
          inputLabel='Password'
          placeholder='••••••••'
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
          Sign in
        </button>
        <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
          Don’t have an account yet?{' '}
          <Link
            href='/register'
            className='font-medium text-primary-600 hover:underline dark:text-primary-500'
          >
            Sign up
          </Link>
        </p>
      </form>
    </FormCardTheme>
  );
}
