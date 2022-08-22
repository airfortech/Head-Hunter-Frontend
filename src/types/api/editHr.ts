import { JsonResponseStatus } from "..";

export interface EditHrRequest {
  id: string;
  maxReservedStudents: number;
}

export interface EditHrResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    maxReservedStudents: number;
  };
}
