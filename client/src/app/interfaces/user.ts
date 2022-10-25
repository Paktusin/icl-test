import { User as GoogleUser } from '@codetrix-studio/capacitor-google-auth';

export interface User
  extends Omit<GoogleUser, 'authentication' | 'serverAuthCode'> {
  token?: string;
}
