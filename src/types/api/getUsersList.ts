import { HrProfileEntity, JsonResponseStatus } from "..";

export interface GetUsersListResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    page: number;
    count: number;
    pages: number;
    users: HrProfileEntity[];
  };
}

export interface FetchListResponse {
  page: number;
  count: number;
  pages: number;
  users: HrProfileEntity[];
}
