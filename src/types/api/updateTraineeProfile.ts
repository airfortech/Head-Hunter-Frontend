import { JsonResponseStatus, TraineeProfileEntity } from "..";

export enum UpdateTraineeProfileResponseMessage {
  success = "Trainee's profile successfully update.",
  notFound = "User with that ID don't exist",
}

export interface UpdateTraineeProfileRequest {
  id?: string;
}

export interface UpdateTraineeProfileResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    traineeProfile: TraineeProfileEntity;
  };
}
