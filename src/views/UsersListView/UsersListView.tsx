import React, { useEffect } from "react";
import { useCurrentSearchParams } from "../../hooks/useCurrentSearchParams";
import { Pagination } from "../../components/Pagination/Pagination";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { StudentItem } from "../../components/UsersList/StudentItem/StudentItem";
import { UsersList } from "../../components/UsersList/UsersList";
import { fetchStudentsList } from "../../utils/fetchStudentsList";
import { UsersListType } from "../../types";
import classes from "./UsersListView.module.css";

interface Props {
  listType:
    | "adminHR"
    | "adminStudent"
    | "hrStudentAvailable"
    | "hrStudentToTalk"
    | "hrStudentHired";
  searchType: UsersListType;
}

export const UsersListView = ({ listType, searchType }: Props) => {
  const params = useCurrentSearchParams(searchType);

  useEffect(() => {
    fetchStudentsList(params);
  }, [searchType]);
  return (
    <div className={classes.UsersListView}>
      <SearchPanel type={searchType} />
      <Pagination type={searchType} currentPage={1} totalPages={12} />
      <div className={classes.wrapper}>
        <UsersList>
          <StudentItem type={listType} id="1" />
          <StudentItem type={listType} id="2" />
          <StudentItem type={listType} id="3" />
          <StudentItem type={listType} id="4" />
          <StudentItem type={listType} id="5" />
        </UsersList>
      </div>
    </div>
  );
};
