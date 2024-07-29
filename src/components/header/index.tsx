import React from 'react';
import Image from 'next/image';
import LogoutModel from '../logout';

export default function Header() {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <div className='flex items-center'>
            <Image
              src='/assets/logo.png'
              className='mr-3 h-6 sm:h-9'
              alt='Flowbite Logo'
              width={40}
              height={6}
            />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-black'>
              TODO APP
            </span>
          </div>
          <div className='flex items-center lg:order-2'>
            <LogoutModel />
          </div>
        </div>
      </nav>
    </header>
  );
}
