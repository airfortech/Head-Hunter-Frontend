import { JsonResponseStatus } from "..";

export enum DeleteUserResponseMessage {
  userCantBeDeleted = "This user can't be deleted in demo version",
}

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
