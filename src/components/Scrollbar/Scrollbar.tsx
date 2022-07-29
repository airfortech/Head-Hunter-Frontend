import React, { useEffect, useRef, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import classes from './Scrollbar.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Scrollbar = ({ children }: Props) => {
  const [hideScrollbar, setHideScrollbar] = useState(false);
  const timeout: any = useRef(null);

  const handleMouseActivity = () => {
    setHideScrollbar(false);

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setHideScrollbar(true), 2500);
  };

  useEffect(() => {
    timeout.current = setTimeout(() => setHideScrollbar(true), 2500);
  }, []);

  return (
    <Scrollbars
      onMouseMove={handleMouseActivity}
      onWheel={handleMouseActivity}
      className={classes.scrollbar}
      autoHide={hideScrollbar}
      autoHideTimeout={0}
      autoHideDuration={300}
      renderThumbVertical={(props) => (
        <div {...props} className={classes.ThumbVertical} />
      )}
      renderThumbHorizontal={(props) => (
        <div {...props} className={classes.ThumbHorizontal} />
      )}
    >
      {children}
    </Scrollbars>
  );
};
