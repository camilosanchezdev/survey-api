import { UserResponse } from './user.response';

export interface UserListResponse {
  users: UserResponse[];
  length: number;
}
