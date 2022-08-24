import { JsonResponseStatus } from "..";

export enum RegisterResponseMessage {
  incorrectToken = "Unauthorized User",
  userNotFound = "User with that ID don't exist",
  wrongPassword = "Incorrect Password. Password can not be empty and should be at least 6 characters long",
}

export interface RegisterRequest {
  id: string;
  registerToken: string;
  password: string;
}

export interface RegisterResponse {
  code: number;
  status: JsonResponseStatus;
  message: RegisterResponseMessage;
}
