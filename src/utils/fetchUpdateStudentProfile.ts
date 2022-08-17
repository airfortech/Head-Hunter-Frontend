import { ChangePasswordResponse, TraineeProfileRequest } from "../types";
import { config } from "../config/config";

export const fetchUpdateStudentProfile = async (
  data: TraineeProfileRequest
): Promise<ChangePasswordResponse> => {
  const response = await fetch(config.apiUrl + "trainees/editProfile", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
