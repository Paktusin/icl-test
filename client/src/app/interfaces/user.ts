import { Doc } from './Doc';

export interface User extends Doc {
  name: string;
  email: string;
  img: string;
}
