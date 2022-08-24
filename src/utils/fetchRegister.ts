import { RegisterRequest, RegisterResponse } from "../types";
import { config } from "../config/config";

export const fetchRegister = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  const { id, registerToken, password } = data;
  const response = await fetch(
    config.apiUrl + "auth/createPassword/" + id + "/" + registerToken,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    }
  );
  return response.json();
};
