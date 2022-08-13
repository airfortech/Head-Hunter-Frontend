import React, { createContext, useState } from "react";
import { FilterOptions, SearchOptions, SortOptions } from "../types";
import { initialFilterOptions, initialSortOptions } from "./searchProviderData";

interface Props {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchOptions>({
  sortOptions: initialSortOptions,
  setSortOptions: () => {},
  filterOptions: initialFilterOptions,
  setFilterOptions: () => {},
});

export const SearchProvider = ({ children }: Props) => {
  const [sortOptions, setSortOptions] =
    useState<SortOptions>(initialSortOptions);
  const [filterOptions, setFilterOptions] =
    useState<FilterOptions>(initialFilterOptions);

  return (
    <SearchContext.Provider
      value={{ sortOptions, setSortOptions, filterOptions, setFilterOptions }}
    >
      {children}
    </SearchContext.Provider>
  );
};
