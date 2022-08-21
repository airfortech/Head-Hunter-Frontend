import React, { useEffect } from "react";
import { useSearch } from "../../hooks/useSearch";
import { Pagination } from "../../components/Pagination/Pagination";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { UserItem } from "../../components/UsersList/UserItem/UserItem";
import { UsersList } from "../../components/UsersList/UsersList";
import { HrProfileEntity, UsersListType } from "../../types";
import classes from "./UsersListView.module.css";

interface Props {
  type: UsersListType;
}

export const UsersListView = ({ type }: Props) => {
  const { setType, usersLists } = useSearch();

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
      <div className={classes.wrapper}>
        <UsersList>
          {!usersLists[type].count ? (
            <h2 className={classes.noResults}>Brak wyników.</h2>
          ) : (
            usersLists[type].users.map((user: HrProfileEntity) => (
              <UserItem type={type} key={user.userId} data={user} />
            ))
          )}
        </UsersList>
      </div>
    </div>
  );
};
