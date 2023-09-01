import React from "react";
import styles from './LoginPage.module.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/UI/Button/Button";


function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handlerSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signIn(user, () => navigate(fromPage, {replace: true}));
    }

    return (
      <div className={styles.wrapper}>
        <h1>Login page</h1>
        <form onSubmit={handlerSubmit}>
            <label htmlFor="username">
                <span>Name: </span><input type="text" className={styles.input} id="username" name="username"></input>
            </label>
            <Button>Login</Button>
        </form>
      </div>
    );
}

export default LoginPage;