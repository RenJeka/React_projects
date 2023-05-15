import React from 'react';
import classes from "./InternetStore.component.module.scss";
import {NavLink, Outlet} from "react-router-dom";

const InternetStoreComponent = () => {
    return (
        <div className={classes.wrapper}>
            <aside className={classes.aside}>
                <nav>
                    <ul>
                        <NavLink to={"goods/1"}>Good-1</NavLink>
                        <NavLink to={"goods/2"}>Good-2</NavLink>
                        <NavLink to={"goods/3"}>Good-3</NavLink>
                        <NavLink to={"goods/4"}>Good-4</NavLink>
                        <NavLink to={"goods/5"}>Good-5</NavLink>
                    </ul>
                </nav>
            </aside>
            <header className={classes.header}>
                <span>Yevhenii's Internet Store</span>
                <nav>
                    <NavLink to={"home"}>Home</NavLink>
                    <NavLink to={"contacts"}>Contacts</NavLink>
                </nav>
            </header>
            <div className={classes.main}>
                <Outlet/>
            </div>
        </div>
    );
};

export default InternetStoreComponent;
