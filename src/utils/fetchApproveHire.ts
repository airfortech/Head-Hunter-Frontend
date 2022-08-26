import { ApproveHireResponse } from "../types";
import { config } from "../config/config";

export const fetchApproveHire = async (): Promise<ApproveHireResponse> => {
  const response = await fetch(config.apiUrl + "trainees/approveHire", {
    method: "GET",
    credentials: "include",
  });
  return response.json();
};
