import React, { createContext, useState } from "react";
import { SearchOptions, SortOptions } from "../types";
import { initialSortValues } from "./searchProviderData";

interface Props {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchOptions>({
  sortOptions: initialSortValues,
  setSortOptions: () => {},
});

export const SearchProvider = ({ children }: Props) => {
  const [sortOptions, setSortOptions] =
    useState<SortOptions>(initialSortValues);

  return (
    <SearchContext.Provider value={{ sortOptions, setSortOptions }}>
      {children}
    </SearchContext.Provider>
  );
};
