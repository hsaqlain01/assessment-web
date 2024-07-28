'use server';

import { cookies } from 'next/headers';
import { login } from '@/api/auth/Login';
import { ILogin } from '@/interfaces/auth/login.interface';
import { IApiResponse } from '@/interfaces/api-response.interface';

export async function loginAuth(formValues: {
  username: string;
  password: string;
}) {
  try {
    const data: IApiResponse<ILogin> = await login(formValues);

    if (data?.data?.access_token) {
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 2 * 60 * 60 * 1000);

      cookies().set(
        'loginUser',
        JSON.stringify({
          id: data?.data?.user?.id,
          access_token: data?.data?.access_token,
        }),
        {
          expires: expirationTime,
        }
      );
    }
    return data;
  } catch (error) {
    return error;
  }
}
