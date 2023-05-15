import React from 'react';
import classes from "./InternetStore.component.module.scss";
import {Link} from "react-router-dom";

const InternetStoreComponent = () => {
    return (
        <div className={classes.wrapper}>
            <aside className={classes.aside}>
                <nav>
                    <ul>
                        <Link to={"#"}>Good-1</Link>
                        <Link to={"#"}>Good-2</Link>
                        <Link to={"#"}>Good-3</Link>
                        <Link to={"#"}>Good-4</Link>
                        <Link to={"#"}>Good-5</Link>
                    </ul>
                </nav>
            </aside>
            <header className={classes.header}>
                Yevhenii's Internet Store
            </header>
            <div className={classes.main}>

            </div>
        </div>
    );
};

export default InternetStoreComponent;
