import { useSearch } from "./useSearch";

type Type =
  | "adminHR"
  | "adminStudent"
  | "adminStudentAvailable"
  | "adminStudentToTalk"
  | "adminStudentHired"
  | "hrStudentAvailable"
  | "hrStudentToTalk"
  | "hrStudentHired";

export const useCurrentSearchParams = (type: Type) => {
  const { limit, sortOptions, filterOptions } = useSearch();
  const params = { limit, ...sortOptions[type], ...filterOptions[type] };
  return params;
};
