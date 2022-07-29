import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './TabsNavigation.module.css';

interface Props {
  routes: {
    anchor: string;
    route: string;
  }[];
}

interface IsLinkActiveProps {
  isActive: boolean;
}

export const TabsNavigation = ({ routes }: Props) => {
  const itemsEls: any = useRef([]);
  const barRef = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState<number>();
  const [width, setWidth] = useState<number>();

  const isLinkActive = ({ isActive }: IsLinkActiveProps): string => {
    return isActive ? `${classes.link} ${classes.active}` : classes.link;
  };

  const handleClick = (itemIndex: number) => {
    if (!itemsEls?.current) return;
    setWidth(itemsEls.current[itemIndex].clientWidth);
    setXPos(itemsEls.current[itemIndex].offsetLeft);
  };

  useEffect(() => {
    if (!itemsEls?.current) return;
    console.log('1');
    itemsEls.current.forEach((item: any, i: number) => {
      if ([...item.children[0].classList].join('').includes('active')) {
        setWidth(itemsEls.current[i].clientWidth);
        setXPos(itemsEls.current[i].offsetLeft);
      }
    });
  }, []);

  useEffect(() => {
    if (!barRef?.current) return;
    console.log(2);
    barRef.current.style.left = xPos + 'px';
    barRef.current.style.width = width + 'px';
  }, [xPos, width]);

  return (
    <nav className={classes.TabsNavigation}>
      <ul className={classes.wrapper}>
        {routes.map(({ anchor, route }, i) => (
          <li
            key={i}
            ref={(element: any) => itemsEls.current.push(element)}
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
