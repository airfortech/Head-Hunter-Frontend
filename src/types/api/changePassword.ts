import { JsonResponseStatus } from "..";

export enum ChangePasswordResponseMessage {
  passwordIsTheSame = "New password must be different",
  incorrectPassword = "Bad Password",
  cantChangePassword = "You can't change this user password in demo version",
}

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
