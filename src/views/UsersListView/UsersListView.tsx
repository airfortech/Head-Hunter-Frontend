import React from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { StudentItem } from "../../components/UsersList/StudentItem/StudentItem";
import { UsersList } from "../../components/UsersList/UsersList";
import classes from "./UsersListView.module.css";

export const UsersListView = () => {
  return (
    <div className={classes.UsersListView}>
      <SearchPanel />
      <Pagination currentPage={1} totalPages={12} />
      <UsersList>
        <StudentItem type="adminHR" id="1" />
        <StudentItem type="adminStudent" id="2" />
        <StudentItem type="hrStudentAvailable" id="3" />
        <StudentItem type="hrStudentToTalk" id="4" />
        <StudentItem type="hrStudentHired" id="5" />
      </UsersList>
    </div>
  );
};
