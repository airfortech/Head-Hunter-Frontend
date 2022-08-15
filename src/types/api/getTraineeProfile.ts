import { JsonResponseStatus, TraineeProfileEntity } from "..";

export enum GetTraineeProfileResponseMessage {
  success = "Trainee's profile successfully fetched.",
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
