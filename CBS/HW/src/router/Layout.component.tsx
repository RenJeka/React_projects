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
                        <Link to={"/page"}>All Home works</Link>
                        <Link to={"/lesson-1"}>Lesson-1</Link>
                        <Link to={"/lesson-2"}>Lesson-2</Link>
                        <Link to={"/lesson-3"}>Lesson-3</Link>
                        <Link to={"/lesson-4"}>Lesson-4</Link>
                        <Link to={"/lesson-5"}>Lesson-5</Link>
                        <Link to={"/lesson-6"}>Lesson-6</Link>
                        <Link to={"/lesson-7"}>Lesson-7</Link>
                        <Link to={"/lesson-8"}>Lesson-8</Link>
                        <Link to={"/lesson-9"}>Lesson-9</Link>
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
