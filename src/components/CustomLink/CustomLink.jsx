import React from "react";
import styles from './CustomLink.module.css';
import { Link, useMatch } from "react-router-dom";


function CustomLink({children, to, ...props}) {

    const match = useMatch({
      path: to,
      end: to.length === 1
    });

    return (
      <Link
        to={to}
        className={match ? `${styles.link} ${styles.active}` : `${styles.link}`}
        {...props}
      >
        {children}
      </Link>
    );
}

export default CustomLink;