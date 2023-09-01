import React from "react";
import styles from './ButtonLink.module.css';
import { Link } from "react-router-dom";


function ButtonLink({children, to, ...props}) {
    return (
      <div className={styles.wrapper}>
        <Link className={styles.linkButton} to={to} {...props}>
          {children}
        </Link>
      </div>
    );
}

export default ButtonLink;