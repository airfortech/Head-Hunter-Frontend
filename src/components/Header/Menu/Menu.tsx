import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useAuth } from "../../../hooks/useAuth";
import { Avatar } from "../../Avatar/Avatar";
import { config } from "../../../config/config";
import classes from "./Menu.module.css";

const fetchLogout = async () => {
  await fetch(config.apiUrl + "auth/logout", {
    method: "GET",
    credentials: "include",
  });
};

export const Menu = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const actionsRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLElement>(null);
  const tweenRef = useRef<GSAPTimeline>();

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    await fetchLogout();
    setAuth({});
    navigate("/");
  };

  const handleSettings = () => {
    navigate("settings");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const actionsItems = actionsRef.current?.children;

    if (!actionsItems?.length) return;

    tweenRef.current = gsap
      .timeline()
      .to(iconRef.current, {
        ease: "power2",
        rotation: 180,
        duration: 0.3,
      })
      .to(
        actionsRef.current,
        {
          ease: "power2",
          height: "auto",
          duration: 0.2,
        },
        "<+=0.1"
      )
      .to(
        actionsItems,
        {
          ease: "power2",
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
        },
        "<+=0.1"
      );
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      tweenRef.current?.play();
    } else {
      tweenRef.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <menu className={classes.Menu}>
      <button className={classes.userInfo} onClick={handleMenuToggle}>
        <Avatar name="John Doe" />
        <p>{auth.name}</p>
        <i className="bx bx-caret-up" ref={iconRef}></i>
      </button>
      <div className={classes.actions} ref={actionsRef}>
        <p onClick={handleSettings}>Konto</p>
        <p onClick={handleLogout}>Wyloguj</p>
      </div>
    </menu>
  );
};
