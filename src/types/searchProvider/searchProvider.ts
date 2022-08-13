import { Dispatch } from "react";

export interface SortValues {
  sortType: string;
  sortByType: string;
}

export interface SortOptions {
  adminHR: SortValues;
  adminStudent: SortValues;
  adminStudentAvailable: SortValues;
  adminStudentToTalk: SortValues;
  adminStudentHired: SortValues;
  hrStudentAvailable: SortValues;
  hrStudentToTalk: SortValues;
  hrStudentHired: SortValues;
}

export interface FilterValues {
  courseCompletion: string;
  courseEngagment: string;
  projectDegree: string;
  teamProjectDegree: string;
  expectedTypeWork: string[];
  expectedContractType: string[];
  canTakeApprenticeship: "true" | "false";
  monthsOfCommercialExp: string;
  expectedSalaryFrom: string;
  expectedSalaryTo: string;
}

export interface FilterOptions {
  adminHR: FilterValues;
  adminStudent: FilterValues;
  adminStudentAvailable: FilterValues;
  adminStudentToTalk: FilterValues;
  adminStudentHired: FilterValues;
  hrStudentAvailable: FilterValues;
  hrStudentToTalk: FilterValues;
  hrStudentHired: FilterValues;
}

export interface SearchOptions {
  sortOptions: SortOptions;
  setSortOptions: Dispatch<React.SetStateAction<SortOptions>>;
  filterOptions: FilterOptions;
  setFilterOptions: Dispatch<React.SetStateAction<FilterOptions>>;
}
