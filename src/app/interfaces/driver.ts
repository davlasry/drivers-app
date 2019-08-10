import { ILocation } from './location';
import { ITask } from './task';

export interface IDriver {
  id: string;
  name: string;
  phone: string;
  email: string;
  picture: string;
  location: ILocation;
  tasks: ITask[];
}
