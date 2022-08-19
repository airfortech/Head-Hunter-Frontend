import { FetchStudentsList, FetchStudentsListRequest } from "../types";
import { config } from "../config/config";

export const fetchStudentsListUrl = (params: FetchStudentsList): string => {
  const newParams: FetchStudentsListRequest = {};

  newParams.search = params.search || "";
  newParams.page = params.page || "1";
  newParams.limit = config.defaultResultsPerPageOption.toString();
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

  console.log("fetching students list...");

  const generateQueryString = () => {
    const qs = new URLSearchParams({ ...newParams });
    return `${qs}`.replace(/%2C/g, ",");
  };

  console.log(config.apiUrl + "/trainees?" + generateQueryString().toString());

  return config.apiUrl + "/trainees?" + newParams;
};
