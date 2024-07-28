import React from 'react';
import Image from 'next/image';

export default function AuthHeader() {
  return (
    <div className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
      <Image
        className='w-8 h-8 mr-2'
        src='/assets/To-Do_icon.png'
        width={40}
        height={40}
        alt='logo'
      />
      TODO APP
    </div>
  );
}
