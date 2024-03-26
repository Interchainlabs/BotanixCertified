import NextAuth, { DefaultSession } from 'next-auth';
import { UserOperationDays } from '@/lib/app';

export enum UserPropertyStatusState {
  COMPLETE = 1,
  INCOMPLETE = 0,
}

export interface UserInfoProps {
  id: string;
  name: string;
  email: string;
  image: string;
  iat: number;
  exp: number;
  jti: string;
  wallet_address: string;
}

declare module 'next-auth' {
  type User = UserInfoProps;

  interface Session {
    access_token: string;
    user: UserInfoProps;
  }
}

declare module 'next-auth/jwt' {
  type JWT = UserInfoProps;
}
