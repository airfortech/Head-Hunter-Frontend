import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import classes from "./ThemeSwitcher.module.css";

const changeTheme = (theme: boolean) => {
  const colorScheme = theme ? "light" : "dark";
  for (let i = 1; i < 17; i++) {
    document.documentElement.style.setProperty(
      `--color-${i}`,
      `var(--color-${colorScheme}-mode-${i})`
    );
    document.documentElement.style.setProperty(
      `--color-${i}-hover`,
      `var(--color-${colorScheme}-mode-${i}-hover)`
    );
  }
  document.documentElement.style.setProperty(
    `--font-color-2`,
    `var(--font-color-${colorScheme}-mode-2)`
  );
  document.documentElement.style.setProperty(
    `--font-color-3`,
    `var(--font-color-${colorScheme}-mode-3)`
  );
  document.documentElement.style.setProperty(
    `--font-color-4`,
    `var(--font-color-${colorScheme}-mode-4)`
  );
};

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
    changeTheme(!theme);
  };

  useEffect(() => {
    changeTheme(theme);
  }, []);
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
