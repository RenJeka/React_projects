import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LoginComponent } from '../../barrel';
import classes from "./Lesson9Host.component.module.scss";

const Lesson9HostComponent = () => {

    return (
        <div className={classes.wrapper}>
            <h2>Lesson #9</h2>
            {/*<LoginComponent/>*/}

            <nav className={classes.navigation}>
                <ul>
                    <Link to={"/login"} >Login</Link>
                    <Link to={"iam18"} >Go to 18+ content</Link>
                    <Link to={"internet-store"} >Internet Store</Link>
                </ul>
            </nav>
            <div className={classes.outletWrapper}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Lesson9HostComponent;
