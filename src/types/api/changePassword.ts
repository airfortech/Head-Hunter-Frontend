import { JsonResponseStatus } from "..";

export interface ChangePasswordRequest {
  id?: string;
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    user: Object;
    newPassword: string;
  };
}
