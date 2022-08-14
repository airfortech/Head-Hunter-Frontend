import React, { createContext, useState } from "react";
import { FilterOptions, SearchOptions, SortOptions } from "../types";
import {
  initialFilterOptions,
  initialLimit,
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
});

export const SearchProvider = ({ children }: Props) => {
  const [sortOptions, setSortOptions] =
    useState<SortOptions>(initialSortOptions);
  const [filterOptions, setFilterOptions] =
    useState<FilterOptions>(initialFilterOptions);
  const [limit, setLimit] = useState<string>(initialLimit);

  return (
    <SearchContext.Provider
      value={{
        sortOptions,
        setSortOptions,
        filterOptions,
        setFilterOptions,
        limit,
        setLimit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
