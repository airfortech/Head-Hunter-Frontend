import { FetchStudentsList } from "../types";
import { config } from "../config/config";

export const fetchStudentsList = (params: FetchStudentsList) => {
  const {
    search = "",
    page = "1",
    limit = config.defaultResultsPerPageOption,
    courseCompletion = "1",
    courseEngagment = "1",
    projectDegree = "1",
    teamProjectDegree = "1",
    canTakeApprenticeship = "false",
    monthsOfCommercialExp = "",
    expectedSalaryFrom = "",
    expectedSalaryTo = "",
    sortType = "descending",
    sortByType = "courseCompletion",
  } = params;

  const expectedContractType = params.expectedContractType?.join(",") || "";
  const expectedTypeWork = params.expectedTypeWork?.join(",") || "";

  const url = `${config.apiUrl}trainees?search=${search}&page=${page}&limit=${limit}&courseCompletion=${courseCompletion}&courseEngagment=${courseEngagment}&projectDegree=${projectDegree}&teamProjectDegree=${teamProjectDegree}&expectedTypeWork=${expectedTypeWork}&expectedContractType=${expectedContractType}&canTakeApprenticeship=${canTakeApprenticeship}&monthsOfCommercialExp=${monthsOfCommercialExp}&expectedSalaryFrom=${expectedSalaryFrom}&expectedSalaryTo=${expectedSalaryTo}&sortType=${sortType}&sortByType=${sortByType}`;
  console.log("fetching students list...");
  // console.log(expectedContractType, expectedTypeWork);
  console.log(url);
};
