import { AddHrRequest, AddHrResponse } from "../types";
import { config } from "../config/config";

export const fetchAddHr = async (
  data: AddHrRequest
): Promise<AddHrResponse> => {
  const response = await fetch(config.apiUrl + "admin/addHr", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
