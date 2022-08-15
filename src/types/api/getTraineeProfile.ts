import { JsonResponseStatus, TraineeProfileEntity } from "..";

export enum GetTraineeProfileResponseMessage {
  success = "Trainee's profile successfully fetched.",
  notFound = "Trainee doesn't exists",
}

export interface GetTraineeProfileRequest {
  id?: string;
}

export interface GetTraineeProfileResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    traineeProfile: TraineeProfileEntity;
  };
}
