import React, { useState } from "react";
import Switch from "react-switch";
import classes from "./ThemeSwitcher.module.css";

const themeState =
  localStorage.getItem("theme") !== null
    ? localStorage.getItem("theme")
    : "false";
const initialThemeState = JSON.parse(themeState as string);

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<boolean>(initialThemeState);

  const handleSwitchTheme = () => {
    setTheme((prevState) => !prevState);
    localStorage.setItem("theme", JSON.stringify(!theme));
  };
  return (
    <div className={classes.ThemeSwitcher}>
      <Switch
        onChange={handleSwitchTheme}
        checked={theme}
        className={classes.switcher}
        checkedIcon={<i className={`bx bxs-sun ${classes.checkedIcon}`}></i>}
        uncheckedIcon={
          <i className={`bx bxs-moon ${classes.uncheckedIcon}`}></i>
        }
        activeBoxShadow="0 0 2px 3px var(--color-15)"
      />
    </div>
  );
};
