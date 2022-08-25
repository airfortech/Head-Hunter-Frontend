import { DeleteInterviewRequest, DeleteInterviewResponse } from "../types";
import { config } from "../config/config";

export const fetchDeleteInterview = async (
  data: DeleteInterviewRequest
): Promise<DeleteInterviewResponse> => {
  const response = await fetch(config.apiUrl + "interview", {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
