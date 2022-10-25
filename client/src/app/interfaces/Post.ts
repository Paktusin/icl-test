import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  title: string;
  img: string;
  text: string;
  from: User;
  createdAt: number;
  likes: number;
}
