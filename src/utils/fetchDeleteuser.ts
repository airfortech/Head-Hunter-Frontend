import { DeleteUserRequest, DeleteUserResponse } from "../types/api/deleteUser";
import { config } from "../config/config";

export const fetchDeleteUser = async (
  data: DeleteUserRequest
): Promise<DeleteUserResponse> => {
  const response = await fetch(config.apiUrl + "admin", {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
