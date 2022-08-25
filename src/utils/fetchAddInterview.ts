import { AddInterviewResponse } from "../types";
import { config } from "../config/config";

export const fetchAddInterview = async (
  id: string
): Promise<AddInterviewResponse> => {
  const response = await fetch(config.apiUrl + "interview/add/" + id, {
    credentials: "include",
  });
  return response.json();
};
