import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { Button } from "./Button/Button";
import { config } from "../../config/config";
import classes from "./Pagination.module.css";

interface Props {
  currentPage: number;
  totalPages: number;
}

interface Option {
  value: number;
  label: number;
}

const options: Option[] = config.resultsPerPageOptions.map((option) => {
  return { value: option, label: option };
});

const defaultOptionIndex = options.findIndex(
  (option) => option.value === config.defaultResultsPerPageOption
);

export const Pagination = ({ currentPage, totalPages }: Props) => {
  const [value, setValue] = useState<SingleValue<Option>>(
    defaultOptionIndex > -1 ? options[defaultOptionIndex] : options[0]
  );

  const handleChange = (value: SingleValue<Option>) => {
    setValue(value);
  };
  return (
    <div className={classes.Pagination}>
      <p>Ilość elementów</p>
      <Select
        options={options}
        value={value}
        onChange={handleChange}
        className={classes.select}
      />
      <p>
        strona {currentPage} / {totalPages}
      </p>
      <Button icon="prev" disabled={currentPage < 2} />
      <Button icon="next" disabled={currentPage >= totalPages} />
    </div>
  );
};
