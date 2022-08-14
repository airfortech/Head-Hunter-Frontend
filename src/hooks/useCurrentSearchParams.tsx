import { UsersListType } from "../types";
import { useSearch } from "./useSearch";

export const useCurrentSearchParams = (type: UsersListType) => {
  const { limit, sortOptions, filterOptions } = useSearch();
  const params = { limit, ...sortOptions[type], ...filterOptions[type] };
  return params;
};
