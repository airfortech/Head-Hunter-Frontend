import React, { createContext, useState } from "react";
import { useFetchList } from "../hooks/useFetchList";
import {
  FilterOptions,
  PagesOptions,
  SearchOptions,
  SortOptions,
  UsersListType,
} from "../types";
import {
  initialFilterOptions,
  initialLimit,
  initialPages,
  initialSortOptions,
  initialType,
} from "./searchProviderData";

interface Props {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchOptions>({
  sortOptions: initialSortOptions,
  setSortOptions: () => {},
  filterOptions: initialFilterOptions,
  setFilterOptions: () => {},
  limit: initialLimit,
  setLimit: () => {},
  type: initialType,
  setType: () => {},
  currentPages: initialPages,
  setCurrentPages: () => {},
});

export const SearchProvider = ({ children }: Props) => {
  const [sortOptions, setSortOptions] =
    useState<SortOptions>(initialSortOptions);
  const [filterOptions, setFilterOptions] =
    useState<FilterOptions>(initialFilterOptions);
  const [limit, setLimit] = useState<string>(initialLimit);
  const [type, setType] = useState<UsersListType>(initialType);
  const [currentPages, setCurrentPages] = useState<PagesOptions>(initialPages);
  const data = useFetchList(type, {
    ...sortOptions[type],
    ...filterOptions[type],
    limit,
    page: currentPages[type],
  });

  console.log(type);

  console.log(data);

  return (
    <SearchContext.Provider
      value={{
        sortOptions,
        setSortOptions,
        filterOptions,
        setFilterOptions,
        limit,
        setLimit,
        type,
        setType,
        currentPages,
        setCurrentPages,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
