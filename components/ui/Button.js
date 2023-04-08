import React from 'react';
import classes from './Button.module.css';
import Link from 'next/link';

export default function Button({ link, children, onClick }) {
  if (!link)
    return (
      <button className={classes.btn} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  );
}
