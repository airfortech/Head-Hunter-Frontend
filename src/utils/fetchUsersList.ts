import {
  FetchListResponse,
  FetchUsersList,
  FetchUsersListRequest,
  GetUsersListResponse,
  UserRole,
  UsersListType,
} from "../types";
import { config } from "../config/config";

const fetchUsersListUrl = (params: FetchUsersList): string => {
  const newParams: FetchUsersListRequest = {};

  newParams.search = params.search || "";
  newParams.page = params.page?.toString() || "1";
  newParams.limit =
    params.limit || config.defaultResultsPerPageOption.toString();
  newParams.courseCompletion = params.courseCompletion || "1";
  newParams.courseEngagment = params.courseEngagment || "1";
  newParams.projectDegree = params.projectDegree || "1";
  newParams.teamProjectDegree = params.teamProjectDegree || "1";
  newParams.canTakeApprenticeship = params.canTakeApprenticeship || "false";
  newParams.monthsOfCommercialExp = params.monthsOfCommercialExp || "";
  newParams.expectedTypeWork = params.expectedTypeWork || "";
  newParams.expectedSalaryFrom = params.expectedSalaryFrom || "";
  newParams.expectedSalaryTo = params.expectedSalaryTo || "";
  newParams.sortType = params.sortType || "descending";
  newParams.sortByType = params.sortByType || "courseCompletion";

  newParams.expectedContractType = params.expectedContractType?.join(",") || "";

  const generateQueryString = () => {
    const qs = new URLSearchParams({ ...newParams });
    return `${qs}`.replace(/%2C/g, ",");
  };

  return generateQueryString().toString();
};

export const FetchList = async (
  type: UsersListType,
  role: UserRole,
  params: FetchUsersList
): Promise<FetchListResponse> => {
  const page = type === "adminHR" ? "hr" : "hr";
  try {
    const url = `${config.apiUrl}${role}/${page}/?${fetchUsersListUrl(params)}`;
    const response = await fetch(url, {
      credentials: "include",
    });
    const data: GetUsersListResponse = await response.json();
    return data.data;
  } catch (e) {
    console.log("error fetching");
    return {
      page: 0,
      count: 0,
      pages: 0,
      users: [],
    };
  }
};
