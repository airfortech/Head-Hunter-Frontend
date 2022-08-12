import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import classes from "./UsersList.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UsersList = ({ children }: Props) => {
  const ref = useRef<HTMLUListElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const refCopy = ref.current;
    gsap.fromTo(
      refCopy,
      { opacity: 0, translateY: "-100%" },
      {
        opacity: 1,
        translateY: "0",
        duration: 0.3,
        delay: 0.3,
        ease: "sine.in",
      }
    );

    return () => {
      gsap.fromTo(
        refCopy,
        { opacity: 1, translateY: "0" },
        { opacity: 0, translateY: "-100%", duration: 0.3, ease: "sine.in" }
      );
    };
  }, [pathname]);

  return (
    <ul className={classes.UsersList} ref={ref}>
      {children}
    </ul>
  );
};
