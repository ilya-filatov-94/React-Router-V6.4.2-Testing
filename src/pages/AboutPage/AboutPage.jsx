import React from "react";
import styles from './AboutPage.module.css';
import { Outlet, Link } from "react-router-dom";


function AboutPage() {

    return (
        <div className={styles.about}>
            <h1>About us</h1>
            <p>This is a demo website about React-Router-Dom v6.4.2 library</p>

            <ul>
                <li><Link to="contacts">Our contacts</Link></li>
                <li><Link to="team">Our team</Link></li>
            </ul>


            {/* <Routes>
                <Route path="contacts" element={<p>Our contacts</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes> */}

            <Outlet />
        </div>
    );
}

export default AboutPage;