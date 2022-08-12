import React from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { StudentItem } from "../../components/UsersList/StudentItem/StudentItem";
import { UsersList } from "../../components/UsersList/UsersList";
import classes from "./UsersListView.module.css";

interface Props {
  type:
    | "adminHR"
    | "adminStudent"
    | "hrStudentAvailable"
    | "hrStudentToTalk"
    | "hrStudentHired";
}

export const UsersListView = ({ type }: Props) => {
  return (
    <div className={classes.UsersListView}>
      <SearchPanel />
      <Pagination currentPage={1} totalPages={12} />
      <UsersList>
        <StudentItem type={type} id="1" />
        <StudentItem type={type} id="2" />
        <StudentItem type={type} id="3" />
        <StudentItem type={type} id="4" />
        <StudentItem type={type} id="5" />
      </UsersList>
    </div>
  );
};
