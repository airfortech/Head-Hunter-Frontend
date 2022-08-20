import { UsersListType } from "../types";
import { useSearch } from "./useSearch";

export const useCurrentSearchParams = (type: UsersListType) => {
  const { limit, currentPages, sortOptions, filterOptions } = useSearch();
  const params = {
    limit,
    page: currentPages[type],
    ...sortOptions[type],
    ...filterOptions[type],
  };
  return params;
};
