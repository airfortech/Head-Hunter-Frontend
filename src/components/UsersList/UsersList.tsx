import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSearch } from "../../hooks/useSearch";
import classes from "./UsersList.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UsersList = ({ children }: Props) => {
  const ref = useRef<HTMLUListElement>(null);
  const { type, currentPages, limit, filterOptions, sortOptions, search } =
    useSearch();

  useEffect(() => {
    const refCopy = ref.current;
    gsap.fromTo(
      refCopy,
      { opacity: 0, translateY: "-100%" },
      {
        opacity: 1,
        translateY: "0",
        duration: 0.3,
        ease: "sine.in",
      }
    );

    return () => {
      gsap.to(refCopy, {
        opacity: 0,
        duration: 0,
        ease: "sine.in",
      });
    };
  }, [type, currentPages, limit, filterOptions, sortOptions, search]);

  return (
    <ul className={classes.UsersList} ref={ref}>
      {children}
    </ul>
  );
};
