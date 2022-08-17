import { JsonResponseStatus } from "..";

export interface UploadCsvRequest {
  data: any;
}

export interface UploadCsvResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    userThatWasAlreadyExist: string[];
  };
}
