import React, { createContext, useState } from "react";
import {
  FilterOptions,
  PagesOptions,
  SearchOptions,
  SortOptions,
} from "../types";
import {
  initialFilterOptions,
  initialLimit,
  initialPages,
  initialSortOptions,
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
  currentPages: initialPages,
  setCurrentPages: () => {},
});

export const SearchProvider = ({ children }: Props) => {
  const [sortOptions, setSortOptions] =
    useState<SortOptions>(initialSortOptions);
  const [filterOptions, setFilterOptions] =
    useState<FilterOptions>(initialFilterOptions);
  const [limit, setLimit] = useState<string>(initialLimit);
  const [currentPages, setCurrentPages] = useState<PagesOptions>(initialPages);

  return (
    <SearchContext.Provider
      value={{
        sortOptions,
        setSortOptions,
        filterOptions,
        setFilterOptions,
        limit,
        setLimit,
        currentPages,
        setCurrentPages,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
