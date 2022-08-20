import React, { useEffect } from "react";
import { useSearch } from "../../hooks/useSearch";
import { Pagination } from "../../components/Pagination/Pagination";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { StudentItem } from "../../components/UsersList/StudentItem/StudentItem";
import { UsersList } from "../../components/UsersList/UsersList";
import { UsersListType } from "../../types";
import classes from "./UsersListView.module.css";

interface Props {
  type: UsersListType;
}

export const UsersListView = ({ type }: Props) => {
  const { currentPages } = useSearch();
  const { setType } = useSearch();

  useEffect(() => {
    setType(type);
  }, [type]);

  return (
    <div className={classes.UsersListView}>
      <SearchPanel type={type} />
      <Pagination
        type={type}
        currentPage={currentPages[type]}
        totalPages={12}
      />
      <div className={classes.wrapper}>
        <UsersList>
          <StudentItem type={type} id="1" />
          <StudentItem type={type} id="2" />
          <StudentItem type={type} id="3" />
          <StudentItem type={type} id="4" />
          <StudentItem type={type} id="5" />
        </UsersList>
      </div>
    </div>
  );
};
