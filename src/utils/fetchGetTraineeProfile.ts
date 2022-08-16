import { config } from "../config/config";
import { GetTraineeProfileRequest, GetTraineeProfileResponse } from "../types";

export const fetchGetTraineeProfile = async ({
  id,
}: GetTraineeProfileRequest): Promise<GetTraineeProfileResponse> => {
  const response = await fetch(config.apiUrl + "trainees/" + id, {
    credentials: "include",
  });
  return response.json();
};
