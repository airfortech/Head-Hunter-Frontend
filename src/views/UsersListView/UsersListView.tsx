import React, { useEffect } from "react";
import { useSearch } from "../../hooks/useSearch";
import { Pagination } from "../../components/Pagination/Pagination";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { UsersList } from "../../components/UsersList/UsersList";
import {
  ConvertStudentInfo,
  HrProfileEntity,
  UsersListType,
} from "../../types";
import classes from "./UsersListView.module.css";
import { UserItemHr } from "../../components/UsersList/UserItem/UserItemHr";
import { UserItem } from "../../components/UsersList/UserItem/UserItem";

interface Props {
  type: UsersListType;
}

export const UsersListView = ({ type }: Props) => {
  const { setType, usersLists, isLoading } = useSearch();

  useEffect(() => {
    setType(type);
  }, [type]);

  return (
    <div className={classes.UsersListView}>
      <SearchPanel type={type} />
      <Pagination
        type={type}
        currentPage={usersLists[type].page}
        totalPages={usersLists[type].pages}
      />
      {!isLoading && (
        <div className={classes.wrapper}>
          <UsersList>
            {!usersLists[type].count ? (
              <h2 className={classes.noResults}>Brak wyników.</h2>
            ) : type === "adminHR" ? (
              usersLists[type].users.map((user: HrProfileEntity) => (
                <UserItemHr type={type} key={user.userId} data={user} />
              ))
            ) : (
              usersLists[type].users.map((user: ConvertStudentInfo) => (
                <UserItem type={type} key={user.id} data={user} />
              ))
            )}
          </UsersList>
        </div>
      )}
    </div>
  );
};
