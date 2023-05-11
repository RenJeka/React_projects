import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from "./Header.component.module.scss";

const HeaderComponent = () => {
    return (
        <div className={classes.wrapper}>
            <Link to={"/home"}>HOME</Link>
            <NavLink to={"/page"}>PAGE</NavLink>
        </div>
    );
};

export default HeaderComponent;
