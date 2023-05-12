import React from 'react';
import classes from "./Home.component.module.scss";

const HomeComponent = () => {
    return (
        <div>
            <hgroup className={classes.header}>
                <h3>Hello! This is a home component</h3>
                <h5>
                    Please, choose lesson at sidebar at the right.
                    <br/>
                    Or just choose "All HOME WORKS" to see all HW in one page!
                </h5>
            </hgroup>
        </div>
    );
};

export default HomeComponent;
