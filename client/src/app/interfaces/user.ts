import { User as GoogleUser } from '@codetrix-studio/capacitor-google-auth';

export interface User
  extends Omit<GoogleUser, 'authentication' | 'serverAuthCode' | 'imageUrl'> {
  token?: string;
  picture?: string;
}
