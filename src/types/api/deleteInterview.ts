import { JsonResponseStatus } from "..";

export interface DeleteInterviewRequest {
  hrId: string;
  traineeId: string;
}

export interface DeleteInterviewResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
}
