'use client';

import React, { Fragment, useState } from 'react';
import { deleteCookie } from 'cookies-next';
import LogoutModal from '../models/Logout';
import ModalLayout from '../modal';

export default function Logout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    deleteCookie('loginUser');
    window.location.href = '/login';
  };

  return (
    <Fragment>
      <button
        onClick={toggleModal}
        className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
      >
        Logout
      </button>

      {isModalOpen && (
        <ModalLayout
          title='Are you sure you want to logout?'
          onClose={toggleModal}
          ignoreFooter={false}
          onSubmit={handleLogout}
        />
      )}
    </Fragment>
  );
}
