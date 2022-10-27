import { Doc } from './Doc';
import { User } from './User';

export interface Post extends Doc {
  title: string;
  img: string;
  text: string;
  type: string;
  region: string;
  from: User;
  createdAt: number;
}
