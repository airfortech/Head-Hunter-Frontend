import { config } from "../config/config";
import {
  SortOptions,
  SortValues,
  FilterValues,
  FilterOptions,
  PagesOptions,
  UsersListType,
  FetchListResponse,
  UsersLists,
  SearchesOptions,
} from "../types";

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

const initLimit =
  config.resultsPerPageOptions.indexOf(config.defaultResultsPerPageOption) > -1
    ? config.defaultResultsPerPageOption.toString()
    : "10";

export const initialLimit: string = initLimit;

export const initialPage: number = 1;

export const initialType: UsersListType = "adminHR";

export const initialPages: PagesOptions = {
  adminHR: initialPage,
  adminStudent: initialPage,
  adminStudentAvailable: initialPage,
  adminStudentToTalk: initialPage,
  adminStudentHired: initialPage,
  hrStudentAvailable: initialPage,
  hrStudentToTalk: initialPage,
  hrStudentHired: initialPage,
};

export const initialSearches: SearchesOptions = {
  adminHR: "",
  adminStudent: "",
  adminStudentAvailable: "",
  adminStudentToTalk: "",
  adminStudentHired: "",
  hrStudentAvailable: "",
  hrStudentToTalk: "",
  hrStudentHired: "",
};

export const initialUsersList: FetchListResponse = {
  page: 0,
  count: 0,
  pages: 0,
  users: [],
};

export const initialUsersLists: UsersLists = {
  adminHR: initialUsersList,
  adminStudent: initialUsersList,
  adminStudentAvailable: initialUsersList,
  adminStudentToTalk: initialUsersList,
  adminStudentHired: initialUsersList,
  hrStudentAvailable: initialUsersList,
  hrStudentToTalk: initialUsersList,
  hrStudentHired: initialUsersList,
};
