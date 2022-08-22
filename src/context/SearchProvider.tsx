import React, { createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { FetchList } from "../utils/fetchUsersList";
import {
  FilterOptions,
  PagesOptions,
  SearchOptions,
  SortOptions,
  UsersLists,
  UsersListType,
} from "../types";
import {
  initialFilterOptions,
  initialLimit,
  initialPages,
  initialSortOptions,
  initialType,
  initialUsersLists,
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
  usersLists: initialUsersLists,
  setUsersLists: () => {},
  refreshList: () => {},
});

export const SearchProvider = ({ children }: Props) => {
  const [sortOptions, setSortOptions] =
    useState<SortOptions>(initialSortOptions);
  const [filterOptions, setFilterOptions] =
    useState<FilterOptions>(initialFilterOptions);
  const [limit, setLimit] = useState<string>(initialLimit);
  const [type, setType] = useState<UsersListType>(initialType);
  const [currentPages, setCurrentPages] = useState<PagesOptions>(initialPages);
  const [usersLists, setUsersLists] = useState<UsersLists>(initialUsersLists);
  const [refresh, setRefresh] = useState<number>(0);
  const { auth } = useAuth();

  const getList = async () => {
    if (!auth.role) return;
    const data = await FetchList(type, auth.role, {
      ...sortOptions[type],
      ...filterOptions[type],
      limit,
      page: currentPages[type],
    });
    setUsersLists((prevState) => {
      return { ...prevState, [type]: data };
    });
  };

  const refreshList = () => {
    setRefresh((prevState) => prevState + 1);
  };

  useEffect(() => {
    getList();
  }, [type, currentPages, filterOptions, sortOptions, limit]);

  useEffect(() => {
    getList();
  }, [auth]);

  useEffect(() => {
    getList();
  }, [refresh]);

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
        usersLists,
        setUsersLists,
        refreshList,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
