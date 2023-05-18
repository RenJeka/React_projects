import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from "./Header.component.module.scss";
import {AuthComponent} from "../../barrel";
const HeaderComponent = () => {
    return (
        <div className={classes.wrapper}>

            <span>My home works for REACT Essential course</span>
            {/*<Link to={"/home"}>HOME</Link>*/}
            {/*<NavLink to={"/page"}>PAGE</NavLink>*/}
            <div className={classes.authWrapper}>
                <AuthComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;
