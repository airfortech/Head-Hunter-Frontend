import { config } from "../config/config";
import { SortOptions, SortValues, FilterValues, FilterOptions } from "../types";

const initialSortValues: SortValues = {
  sortType: "descending",
  sortByType: "courseCompletion",
};

export const initialSortOptions: SortOptions = {
  adminHR: initialSortValues,
  adminStudent: initialSortValues,
  adminStudentAvailable: initialSortValues,
  adminStudentToTalk: initialSortValues,
  adminStudentHired: initialSortValues,
  hrStudentAvailable: initialSortValues,
  hrStudentToTalk: initialSortValues,
  hrStudentHired: initialSortValues,
};

export const initialFilterValues: FilterValues = {
  courseCompletion: "1",
  courseEngagment: "1",
  projectDegree: "1",
  teamProjectDegree: "1",
  expectedTypeWork: "",
  expectedContractType: [],
  canTakeApprenticeship: "false",
  monthsOfCommercialExp: "",
  expectedSalaryFrom: "",
  expectedSalaryTo: "",
};

export const initialFilterOptions: FilterOptions = {
  adminHR: initialFilterValues,
  adminStudent: initialFilterValues,
  adminStudentAvailable: initialFilterValues,
  adminStudentToTalk: initialFilterValues,
  adminStudentHired: initialFilterValues,
  hrStudentAvailable: initialFilterValues,
  hrStudentToTalk: initialFilterValues,
  hrStudentHired: initialFilterValues,
};

export const initialLimit: string = config.resultsPerPageOptions[0].toString();
