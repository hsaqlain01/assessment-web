'use server';

import { cookies } from 'next/headers';
import { baseURL } from '@/common/Constant';
import { IApiResponse } from '@/interfaces/api-response.interface';
import { IGetAllTodos } from '@/interfaces/todo/get-all.interface';

export const GetAllTodos = async (
  page?: string,
  limit?: string
): Promise<IApiResponse<IGetAllTodos> | any> => {
  const loginUser = cookies().get('loginUser')?.value;
  const loginUserData = loginUser ? JSON.parse(loginUser) : '';

  try {
    const url = `${baseURL}/todo/listing?page=${page}&limit=${limit}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loginUserData?.access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    return error;
  }
};
