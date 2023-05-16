import React from 'react';
import {FooterComponent, HeaderComponent} from "../barrel";
import {Outlet} from "react-router";
import classes from "./Layout.component.module.scss"
import {NavLink} from "react-router-dom";
const LayoutComponent = () => {
    return (
        <div className={classes.wrapper}>
            <aside className={classes.aside}>
                <nav>
                    <ul>
                        <NavLink  to={"/page"}>All Home works</NavLink>
                        <NavLink  to={"/lesson-1"}>Lesson-1</NavLink>
                        <NavLink  to={"/lesson-2"}>Lesson-2</NavLink>
                        <NavLink  to={"/lesson-3"}>Lesson-3</NavLink>
                        <NavLink  to={"/lesson-4"}>Lesson-4</NavLink>
                        <NavLink  to={"/lesson-5"}>Lesson-5</NavLink>
                        <NavLink  to={"/lesson-6"}>Lesson-6</NavLink>
                        <NavLink  to={"/lesson-7"}>Lesson-7</NavLink>
                        <NavLink  to={"/lesson-8"}>Lesson-8</NavLink>
                        <NavLink  to={"/lesson-9"}>Lesson-9</NavLink>
                        <NavLink  to={"/lesson-10"}>Lesson-10</NavLink>
                        <NavLink  to={"/lesson-11"}>Lesson-11</NavLink>
                    </ul>
                </nav>
            </aside>
            <div className={classes.header}>
                <HeaderComponent/>
            </div>
            <div className={classes.detail}>
                <Outlet/>
            </div>
            <div className={classes.footer}>
                <FooterComponent/>
            </div>
        </div>
    );
};

export default LayoutComponent;
