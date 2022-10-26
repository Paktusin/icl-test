import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  _id: string;
  title: string;
  img: string;
  text: string;
  type: string;
  region: string;
  from: User;
  createdAt: number;
  likes: number;
}
