import { JsonResponseStatus } from "..";

export interface LogoutResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
}
