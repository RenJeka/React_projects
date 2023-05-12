import React from 'react';
import {FooterComponent, HeaderComponent} from "../barrel";
import {Outlet} from "react-router";
import classes from "./Layout.component.module.scss"
import {Link} from "react-router-dom";

const LayoutComponent = () => {
    return (
        <div className={classes.wrapper}>
            <aside className={classes.aside}>
                <nav>
                    <ul>
                        <Link to={"/page"}>Lesson-1</Link>
                        <Link to={"/page"}>Lesson-2</Link>
                        <Link to={"/page"}>Lesson-3</Link>
                        <Link to={"/page"}>Lesson-4</Link>
                        <Link to={"/page"}>Lesson-5</Link>
                        <Link to={"/page"}>Lesson-6</Link>
                        <Link to={"/page"}>Lesson-7</Link>
                        <Link to={"/page"}>Lesson-8</Link>
                        <Link to={"/page"}>Lesson-9</Link>
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
