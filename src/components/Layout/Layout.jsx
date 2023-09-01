import React from "react";
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


function Layout() {

    return (
      <>
        <div className={styles.header}>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/posts">Blog</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </div>

        <div className={styles.main}>
            <Outlet />
        </div>
        
        <div className={styles.footer}>
          <span>© React-Router Tutorials 2023</span>
        </div>
      </>
    );
}

export default Layout;