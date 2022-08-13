import React from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { StudentItem } from "../../components/UsersList/StudentItem/StudentItem";
import { UsersList } from "../../components/UsersList/UsersList";
import classes from "./UsersListView.module.css";

interface Props {
  listType:
    | "adminHR"
    | "adminStudent"
    | "hrStudentAvailable"
    | "hrStudentToTalk"
    | "hrStudentHired";
  searchType?:
    | "adminHR"
    | "adminStudent"
    | "adminStudentAvailable"
    | "adminStudentToTalk"
    | "adminStudentHired"
    | "hrStudentAvailable"
    | "hrStudentToTalk"
    | "hrStudentHired";
}

export const UsersListView = ({ listType, searchType }: Props) => {
  return (
    <div className={classes.UsersListView}>
      <SearchPanel type={searchType} />
      <Pagination currentPage={1} totalPages={12} />
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
