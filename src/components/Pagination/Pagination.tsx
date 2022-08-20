import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { useSearch } from "../../hooks/useSearch";
import { Button } from "./Button/Button";
import { UsersListType } from "../../types";
import { config } from "../../config/config";
import classes from "./Pagination.module.css";

interface Props {
  currentPage: number;
  totalPages: number;
  type: UsersListType;
}

interface Option {
  value: number;
  label: string;
}

const options: Option[] = config.resultsPerPageOptions.map((option) => {
  return { value: option, label: option.toString() };
});

const defaultOptionIndex = options.findIndex(
  (option) => option.value === config.defaultResultsPerPageOption
);

export const Pagination = ({ type, currentPage, totalPages }: Props) => {
  const { setLimit, currentPages, setCurrentPages } = useSearch();
  const [value, setValue] = useState<SingleValue<Option>>(
    defaultOptionIndex > -1 ? options[defaultOptionIndex] : options[0]
  );

  const handleChangeLimit = (value: SingleValue<Option>) => {
    setValue(value);
    if (!value) return;
    setLimit(value.label);
  };

  const handleChangePage = (page: number) => {
    setCurrentPages({ ...currentPages, [type]: page });
  };

  return (
    <div className={classes.Pagination}>
      <p>Ilość elementów</p>
      <Select
        options={options}
        value={value}
        onChange={handleChangeLimit}
        className={classes.select}
      />
      <p>
        strona {currentPage} / {totalPages}
      </p>
      <Button
        icon="prev"
        disabled={currentPage < 2}
        onClick={() => handleChangePage(currentPage - 1)}
      />
      <Button
        icon="next"
        disabled={currentPage >= totalPages}
        onClick={() => handleChangePage(currentPage + 1)}
      />
    </div>
  );
};
