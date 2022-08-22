import { EditHrRequest, EditHrResponse } from "../types";
import { config } from "../config/config";

export const fetchEditHr = async (
  data: EditHrRequest
): Promise<EditHrResponse> => {
  const response = await fetch(
    config.apiUrl + "admin/updateHrMaxReservedStudents",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};
