import { config } from "../config/config";
import { FetchUsersList, UsersListType } from "../types";
import { fetchUsersListUrl } from "../utils/fetchUsersList";
import { useAuth } from "./useAuth";

export const useFetchList = async (
  type: UsersListType,
  params: FetchUsersList
): Promise<any> => {
  const { auth } = useAuth();
  const page = type === "adminHR" ? "hr" : "hr";
  const url = `${config.apiUrl}/${auth.role}/${page}/${fetchUsersListUrl(
    params
  )}`;
  return url;
  // const response = await fetch(config.apiUrl + "trainees/" + id, {
  //   credentials: "include",
  // });
  // return response.json();
};
