import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import classes from "./TabsNavigation.module.css";

interface Props {
  routes: {
    anchor: string;
    route: string;
  }[];
}
export const TabsNavigation = ({ routes }: Props) => {
  const itemsEls = useRef<HTMLLIElement[]>([]);
  const barRef = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState<number>();
  const [width, setWidth] = useState<number>();
  const navigate = useNavigate();
  const { setIsLoading } = useSearch();
  const { pathname } = useLocation();

  const setBarValues = (index: number) => {
    const width = itemsEls.current[index].clientWidth;
    const posX = itemsEls.current[index].offsetLeft;
    if (width !== undefined && posX !== undefined) {
      setWidth(width);
      setXPos(posX);
    }
  };

  const handleClick = (index: number, route: string) => {
    setBarValues(index);
    if (pathname.endsWith(route)) return;
    setIsLoading(true);
    setTimeout(() => {
      navigate(route);
    }, 0);
  };

  useEffect(() => {
    itemsEls.current.forEach((item, index) => {
      if ([...item.children[0].classList].join("").includes("active")) {
        setBarValues(index);
      }
    });
  }, []);

  useEffect(() => {
    if (!barRef.current) return;
    barRef.current.style.left = xPos + "px";
    barRef.current.style.width = width + "px";
  }, [xPos, width]);

  return (
    <nav className={classes.TabsNavigation}>
      <ul className={classes.wrapper}>
        {routes.map(({ anchor, route }, i) => (
          <li
            key={i}
            ref={(element) => {
              if (element) itemsEls.current[i] = element;
            }}
            onClick={() => handleClick(i, route)}
          >
            <p
              className={
                pathname.endsWith(route)
                  ? `${classes.link} ${classes.active}`
                  : `${classes.link}`
              }
            >
              {anchor}
            </p>
          </li>
        ))}
      </ul>
      <div className={classes.bar} ref={barRef}></div>
    </nav>
  );
};
