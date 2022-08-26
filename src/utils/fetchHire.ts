import { HireRequest, HireResponse } from "../types";
import { config } from "../config/config";

export const fetchHire = async (data: HireRequest): Promise<HireResponse> => {
  const response = await fetch(config.apiUrl + "trainees/hire", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
