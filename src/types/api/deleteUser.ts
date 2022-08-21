import { JsonResponseStatus } from "..";

export interface DeleteUserRequest {
  id: string;
}

export interface DeleteUserResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    deleteUserId: string;
  };
}
