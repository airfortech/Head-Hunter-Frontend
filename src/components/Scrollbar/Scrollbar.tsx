import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import classes from './Scrollbar.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Scrollbar = ({ children }: Props) => {
  return (
    <Scrollbars
      className={classes.scrollbar}
      autoHide
      autoHideTimeout={3000}
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
