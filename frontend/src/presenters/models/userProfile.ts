import { nanoid } from 'nanoid';

/** ユーザーの情報 */
export interface UserProfile {
  /** ID */
  id: string;
  /** 名前 */
  name: string;
}

/** 新しいユーザー情報を生成する */
export const createNewUser = (name: string): UserProfile => {
  const user: UserProfile = {
    id: nanoid(),
    name: name,
  };
  return user;
};
