import React from 'react';
import Image from 'next/image';

const FormCardTheme = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className='bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto w-full md:h-screen lg:py-0'>
        <div className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
          <Image
            className='w-8 h-8 mr-2'
            src='/assets/logo.png'
            width={40}
            height={40}
            alt='logo'
          />
          TODO APP
        </div>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormCardTheme;
