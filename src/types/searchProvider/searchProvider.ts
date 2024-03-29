import { Dispatch } from "react";
import { FetchHrListResponse, FetchListResponse } from "..";
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

export interface SearchesOptions {
  adminHR: string;
  adminStudent: string;
  adminStudentAvailable: string;
  adminStudentToTalk: string;
  adminStudentHired: string;
  hrStudentAvailable: string;
  hrStudentToTalk: string;
  hrStudentHired: string;
}

export interface UsersLists {
  adminHR: FetchHrListResponse;
  adminStudent: FetchListResponse;
  adminStudentAvailable: FetchListResponse;
  adminStudentToTalk: FetchListResponse;
  adminStudentHired: FetchListResponse;
  hrStudentAvailable: FetchListResponse;
  hrStudentToTalk: FetchListResponse;
  hrStudentHired: FetchListResponse;
}

export interface SearchOptions {
  sortOptions: SortOptions;
  setSortOptions: Dispatch<React.SetStateAction<SortOptions>>;
  filterOptions: FilterOptions;
  setFilterOptions: Dispatch<React.SetStateAction<FilterOptions>>;
  limit: string;
  setLimit: Dispatch<React.SetStateAction<string>>;
  search: SearchesOptions;
  setSearch: Dispatch<React.SetStateAction<SearchesOptions>>;
  type: UsersListType;
  setType: Dispatch<React.SetStateAction<UsersListType>>;
  isLoading: boolean;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  currentPages: PagesOptions;
  setCurrentPages: Dispatch<React.SetStateAction<PagesOptions>>;
  usersLists: UsersLists;
  setUsersLists: Dispatch<React.SetStateAction<UsersLists>>;
  refreshList: Dispatch<void>;
}
