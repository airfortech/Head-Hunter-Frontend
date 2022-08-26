import { JsonResponseStatus } from "..";

export interface HireRequest {
  traineeId?: string;
}

export interface HireResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
}
