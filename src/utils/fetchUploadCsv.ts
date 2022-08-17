import { UploadCsvResponse } from "../types/api/uploadCsv";
import { config } from "../config/config";

export const fetchUploadCsv = async (file: any): Promise<UploadCsvResponse> => {
  const response = await fetch(config.apiUrl + "admin/importTrainees", {
    method: "POST",
    credentials: "include",
    body: file,
  });
  return response.json();
};
