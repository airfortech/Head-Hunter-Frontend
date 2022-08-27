import { JsonResponseStatus } from "..";

export enum UploadCsvResponseMessage {
  incorrectColumn = "Incorrect column name in csv file. Check that column names are the same as in example",
}

interface UserImport {
  email: string;
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  bonusProjectUrls: string[];
}

export interface UploadCsvRequest {
  data: any;
}

export interface UploadCsvResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    countOfAddedTrainee: number;
    traineeWithBadData: {
      trainee: UserImport;
      error: string;
    }[];
  };
}
