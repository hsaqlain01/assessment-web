import React from 'react';
import CrossSvg from '@/assets/icons/cross';

const ModalLayout = ({
  title,
  onClose,
  ignoreFooter = true,
  onSubmit,
  children,
}: {
  title: string;
  onClose: () => void;
  onSubmit?: () => void;
  ignoreFooter?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <div
      id='createProductModal'
      tabIndex={-1}
      aria-hidden='true'
      className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full'
    >
      <div className='relative p-4 w-full max-w-2xl max-h-full'>
        <div className='relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'>
          <div className='flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              {title}
            </h3>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={onClose}
            >
              <CrossSvg />
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          {children ? children : <div></div>}
          {!ignoreFooter ? (
            <div className='flex justify-end items-center space-x-4'>
              <button
                onClick={onClose}
                type='button'
                className='py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
              >
                No, cancel
              </button>
              <button
                onClick={onSubmit}
                className='py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900'
              >
                Yes, I&apos;m sure
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
