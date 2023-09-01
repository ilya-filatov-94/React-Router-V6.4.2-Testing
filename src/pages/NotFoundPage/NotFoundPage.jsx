import React from "react";
import { Link } from "react-router-dom";
import styles from './NotFoundPage.module.css';



function NotFoundPage() {

    return (
        <div className={styles.notFoundPage}>
            <span>This page doesn't exist. Go <Link to="/">Home</Link>
            </span>
        </div>
    );
}

export default NotFoundPage;