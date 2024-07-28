import { useQuery } from 'react-query';
import { GetAllTodos } from '@/api/todo/GetAll';
import { IApiResponse } from '@/interfaces/api-response.interface';
import { IGetAllTodos } from '@/interfaces/todo/get-all.interface';

export const useAllTodos = (page: string, limit: string) =>
  useQuery<IApiResponse<IGetAllTodos>, Error>(['todos', page, limit], () =>
    GetAllTodos(page, limit)
  );
