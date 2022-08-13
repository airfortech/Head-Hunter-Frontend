import { Dispatch } from "react";

interface Options {
  sortType: string;
  sortByType: string;
}

export interface SortOptions {
  adminHR: Options;
  adminStudent: Options;
  adminStudentAvailable: Options;
  adminStudentToTalk: Options;
  adminStudentHired: Options;
  hrStudentAvailable: Options;
  hrStudentToTalk: Options;
  hrStudentHired: Options;
}

export interface SearchOptions {
  sortOptions: SortOptions;
  setSortOptions: Dispatch<React.SetStateAction<SortOptions>>;
}
