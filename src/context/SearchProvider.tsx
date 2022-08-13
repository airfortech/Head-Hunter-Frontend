import React, { createContext, Dispatch, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface CheckItemType {
  value: string;
  name: string;
}

interface SortType {
  sortTypes: CheckItemType;
  sortByTypes: CheckItemType;
}

interface SortOptions {
  sortOptions: SortType[];
  setSortOptions: Dispatch<React.SetStateAction<SortType[]>>;
}

export const SearchContext = createContext<SortOptions>({
  sortOptions: [],
  setSortOptions: () => {},
});

export const SearchProvider = ({ children }: Props) => {
  const [sortOptions, setSortOptions] = useState<SortType[]>([]);

  return (
    <SearchContext.Provider value={{ sortOptions, setSortOptions }}>
      {children}
    </SearchContext.Provider>
  );
};
