import { JsonResponseStatus } from "..";

export enum LostPasswordResponseMessage {
  incorrectEmail = 'Incorrect email. Email can not be empty and has to include "@".',
  userWithThatEmailNotExist = "User with that email don't exist",
  cantRestorePassword = "You can't restore this user password in demo version",
  success = "Reset Password successfully.",
}

export interface LostPasswordRequest {
  email: string;
}

export interface LostPasswordResponse {
  code: number;
  status: JsonResponseStatus;
  message: LostPasswordResponseMessage;
}
