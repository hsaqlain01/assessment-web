'use client';

import Link from 'next/link';
import { Loader } from '../loader';
import { useFormik } from 'formik';
import { notify } from '@/utils/toast';
import React, { useState } from 'react';
import FormInput from '../common/FormInput';
import { loginAuth } from '@/lib/LoginAuth';
import AuthHeader from '../common/AuthHeader';
import { validationSchema } from './validations/LoginSchema';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formValues: any) => {
    try {
      setLoading(true);
      const data = await loginAuth(formValues);

      if (data) {
        window.location.href = '/';
        notify('success', 'User Loged in Successful.');
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
    validationSchema,
    onSubmit: async (values) => {
      await handleFormSubmit(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <AuthHeader />
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <FormInput
                inputlable='Username'
                placeholder='Jhon doe'
                value={values.username}
                type='text'
                name='username'
                onChangeHandler={handleChange}
                error={
                  errors.username && touched.username ? errors.username : ''
                }
              />
              <FormInput
                inputlable='Password'
                placeholder='••••••••'
                value={values.password}
                type='password'
                name='password'
                onChangeHandler={handleChange}
                error={
                  errors.password && touched.password ? errors.password : ''
                }
              />
              <button
                type='submit'
                disabled={loading}
                className='w-full flex items-center justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                {loading && (
                  <span className='mr-2'>
                    <Loader />
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
          </div>
        </div>
      </div>
    </section>
  );
}
