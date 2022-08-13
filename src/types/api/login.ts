import { JsonResponseStatus, UserRole } from "..";

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
    name: string;
  };
}
