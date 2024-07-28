import React from 'react';

export default function LogoutModal({
  toggleModal,
  handleLogout,
}: {
  toggleModal: () => void;
  handleLogout: () => void;
}) {
  return (
    <div
      aria-hidden='true'
      className='fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto bg-black bg-opacity-50'
    >
      <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
        <div className='relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'>
          <button
            type='button'
            className='text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
            onClick={toggleModal}
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
          <svg
            fill='#000000'
            height='800px'
            width='800px'
            version='1.1'
            viewBox='0 0 490.3 490.3'
            className='text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto'
          >
            <g>
              <g>
                <path
                  d='M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
      s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
      c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
      C27.9,58.95,0,86.75,0,121.05z'
                />
                <path
                  d='M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
      c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
      C380.6,325.15,380.6,332.95,385.4,337.65z'
                />
              </g>
            </g>
          </svg>
          <p className='mb-4 text-gray-500 dark:text-gray-300'>
            Are you sure you want to logout?
          </p>
          <div className='flex justify-center items-center space-x-4'>
            <button
              onClick={toggleModal}
              type='button'
              className='py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
            >
              No, cancel
            </button>
            <button
              onClick={handleLogout}
              className='py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900'
            >
              Yes, I&apos;m sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
