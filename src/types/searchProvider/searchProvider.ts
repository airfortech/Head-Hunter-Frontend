import { Dispatch } from "react";
import { UsersListType } from "../components";

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
  expectedTypeWork: string;
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

export interface PagesOptions {
  adminHR: number;
  adminStudent: number;
  adminStudentAvailable: number;
  adminStudentToTalk: number;
  adminStudentHired: number;
  hrStudentAvailable: number;
  hrStudentToTalk: number;
  hrStudentHired: number;
}

export interface SearchOptions {
  sortOptions: SortOptions;
  setSortOptions: Dispatch<React.SetStateAction<SortOptions>>;
  filterOptions: FilterOptions;
  setFilterOptions: Dispatch<React.SetStateAction<FilterOptions>>;
  limit: string;
  setLimit: Dispatch<React.SetStateAction<string>>;
  type: UsersListType;
  setType: Dispatch<React.SetStateAction<UsersListType>>;
  currentPages: PagesOptions;
  setCurrentPages: Dispatch<React.SetStateAction<PagesOptions>>;
}
