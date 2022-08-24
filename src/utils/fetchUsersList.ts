import {
  FetchHrListResponse,
  FetchListResponse,
  FetchUsersList,
  FetchUsersListRequest,
  GetHrUsersListResponse,
  GetUsersListResponse,
  UsersListType,
} from "../types";
import { config } from "../config/config";
import { convertShortStudentInfo } from "./convertStudentInfo";

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
  newParams.status = params.status || "";

  const generateQueryString = () => {
    const qs = new URLSearchParams({ ...newParams });
    return `${qs}`.replace(/%2C/g, ",");
  };

  return generateQueryString().toString();
};

export const FetchList = async (
  type: UsersListType,
  params: FetchUsersList
): Promise<FetchListResponse> => {
  const status =
    type === "adminStudentAvailable" || type === "hrStudentAvailable"
      ? "available"
      : type === "adminStudentToTalk" || type === "hrStudentToTalk"
      ? "interviewed"
      : type === "adminStudentHired" || type === "hrStudentHired"
      ? "hired"
      : "";
  try {
    const url = `${config.apiUrl}trainees/?${fetchUsersListUrl({
      ...params,
      status,
    })}`;
    const response = await fetch(url, {
      credentials: "include",
    });
    const data: GetUsersListResponse = await response.json();
    return {
      count: data.data.count,
      page: data.data.page,
      pages: data.data.pages,
      users: data.data.users.map((user) => convertShortStudentInfo(user)),
    };
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

export const FetchHrList = async (
  params: FetchUsersList
): Promise<FetchHrListResponse> => {
  try {
    const url = `${config.apiUrl}admin/hr/?${fetchUsersListUrl({
      ...params,
    })}`;
    const response = await fetch(url, {
      credentials: "include",
    });
    const data: GetHrUsersListResponse = await response.json();
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
