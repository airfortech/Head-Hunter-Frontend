import { UserRole } from "../user";

export enum JsonResponseStatus {
  success = "success",
  failed = "failed,",
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    id: string;
    role: UserRole;
    token: string;
  };
}
