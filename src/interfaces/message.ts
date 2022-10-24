import { User } from './user';

export type Sender = Omit<User, 'authentication' | 'serverAuthCode'>;

export interface Message {
  id: string;
  text: string;
  from: Sender;
  to: string;
  time: number;
}
