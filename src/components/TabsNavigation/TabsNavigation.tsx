import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './TabsNavigation.module.css';

interface Props {
  routes: {
    anchor: string;
    route: string;
  }[];
}

interface IsLinkActiveArgs {
  isActive: boolean;
}

export const TabsNavigation = ({ routes }: Props) => {
  const itemsEls: any = useRef<HTMLLIElement[] | null[]>([]);
  const barRef = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState<number>();
  const [width, setWidth] = useState<number>();

  const isLinkActive = ({ isActive }: IsLinkActiveArgs): string => {
    return isActive ? `${classes.link} ${classes.active}` : classes.link;
  };

  const setBarValues = (index: number): void => {
    setWidth(itemsEls.current[index].clientWidth);
    setXPos(itemsEls.current[index].offsetLeft);
  };

  const handleClick = (index: number): void => {
    if (!itemsEls?.current) return;
    setBarValues(index);
  };

  useEffect(() => {
    if (!itemsEls?.current) return;
    itemsEls.current.forEach((item: any, index: number) => {
      if ([...item.children[0].classList].join('').includes('active')) {
        setBarValues(index);
      }
    });
  }, []);

  useEffect(() => {
    if (!barRef.current) return;
    barRef.current.style.left = xPos + 'px';
    barRef.current.style.width = width + 'px';
  }, [xPos, width]);

  return (
    <nav className={classes.TabsNavigation}>
      <ul className={classes.wrapper}>
        {routes.map(({ anchor, route }, i) => (
          <li
            key={i}
            ref={(element) => (itemsEls.current[i] = element)}
            onClick={() => handleClick(i)}
          >
            <NavLink to={route} className={isLinkActive}>
              {anchor}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={classes.bar} ref={barRef}></div>
    </nav>
  );
};
