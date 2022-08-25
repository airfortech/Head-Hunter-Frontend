import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSearch } from "../../hooks/useSearch";
import classes from "./UsersList.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UsersList = ({ children }: Props) => {
  const ref = useRef<HTMLUListElement>(null);
  const { isLoading } = useSearch();

  useEffect(() => {
    const refCopy = ref.current;
    if (isLoading) {
      gsap.to(refCopy, {
        opacity: 0,
        duration: 0,
        ease: "sine.in",
      });
    } else {
      gsap.fromTo(
        refCopy,
        { opacity: 0, translateY: "-100%" },
        {
          opacity: 1,
          translateY: "0",
          duration: 0.3,
          delay: 0.1,
          ease: "sine.in",
        }
      );
    }
  }, [isLoading]);

  return (
    <ul className={classes.UsersList} ref={ref}>
      {children}
    </ul>
  );
};
