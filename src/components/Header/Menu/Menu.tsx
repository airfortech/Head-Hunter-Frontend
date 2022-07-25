import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Avatar } from '../../Avatar/Avatar';
import classes from './Menu.module.css';

export const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const actionsRef = useRef<HTMLDivElement>(null);
  const actionsItemsRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLElement>(null);
  const tweenRef = useRef<any>(null);

  const handleClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    tweenRef.current = gsap
      .timeline()
      .to(iconRef.current, {
        ease: 'power3',
        rotation: 180,
        duration: 0.2,
      })
      .to(actionsRef.current, {
        ease: 'power3',
        height: 'auto',
        duration: 0.2,
      })
      .to(actionsItemsRef.current, {
        ease: 'power3',
        opacity: 1,
        duration: 0.2,
      });

    return () => {
      tweenRef.current.kill();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      tweenRef.current.play();
    } else {
      tweenRef.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <menu className={classes.Menu}>
      <button className={classes.userInfo} onClick={handleClick}>
        <Avatar name="John Doe" />
        <p>John Doe</p>
        <i className="bx bx-caret-up" ref={iconRef}></i>
      </button>
      <div className={classes.actions} ref={actionsRef}>
        <div ref={actionsItemsRef} className={classes.actionsItems}>
          <p>Konto</p>
          <p>Wyloguj</p>
        </div>
      </div>
    </menu>
  );
};
