'use server';

import { cookies } from 'next/headers';
import { baseURL } from '@/common/Constant';
import { ICreateTodo } from '@/interfaces/todo/create.interface';
import { IApiResponse } from '@/interfaces/api-response.interface';

export const CreateTodo = async (formData: {
  title: string;
  description: string;
}): Promise<IApiResponse<ICreateTodo> | any> => {
  const loginUser = cookies().get('loginUser')?.value;
  const loginUserData = loginUser ? JSON.parse(loginUser) : '';

  try {
    const url = `${baseURL}/todo`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loginUserData?.access_token}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();

    console.log('first', responseData);

    return responseData;
  } catch (error) {
    console.log(error);
    return error;
  }
};
