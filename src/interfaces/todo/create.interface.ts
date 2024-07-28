import { IUser } from '../auth/user.interface';

export interface ICreateTodo {
  id: number;
  completed: number;
  title: string;
  description: string;
  user?: IUser;
  createdAt: string;
  updatedAt: string;
}
