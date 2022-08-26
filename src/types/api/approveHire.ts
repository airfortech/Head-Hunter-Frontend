import { JsonResponseStatus } from "..";

export interface ApproveHireResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
}
