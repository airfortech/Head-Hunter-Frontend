import { GetTraineeProfileRequest, GetTraineeProfileResponse } from "../types";
import { config } from "../config/config";

export const fetchGetStudentProfile = async ({
  id,
}: GetTraineeProfileRequest): Promise<GetTraineeProfileResponse> => {
  const response = await fetch(config.apiUrl + "trainees/" + id, {
    credentials: "include",
  });
  return response.json();
};
