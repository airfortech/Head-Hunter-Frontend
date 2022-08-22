import { HrProfileEntity, JsonResponseStatus } from "..";

export enum AddHrResponseMessage {
  hrAlreadyExist = "HR was already added.",
}

export interface AddHrRequest {
  fullName: string;
  email: string;
  company: string;
  maxReservedStudents: number;
}

export interface AddHrResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: HrProfileEntity;
}
