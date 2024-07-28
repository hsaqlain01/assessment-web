'use server';

import { cookies } from 'next/headers';
import { baseURL } from '@/common/Constant';
import { ICreateTodo } from '@/interfaces/todo/create.interface';
import { IApiResponse } from '@/interfaces/api-response.interface';

export const GetOneTodo = async (
  id: string
): Promise<IApiResponse<ICreateTodo> | any> => {
  const loginUser = cookies().get('loginUser')?.value;
  const loginUserData = loginUser ? JSON.parse(loginUser) : '';

  try {
    const url = `${baseURL}/todo/${id}`;
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
