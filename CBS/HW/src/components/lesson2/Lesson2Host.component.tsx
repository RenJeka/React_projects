import React from 'react';
import {ColorStringParent, PropsOutputComponent, WithChildrenComponent} from "../../barrel";
import classes from "./Lesson2Host.component.module.scss";

const Lesson2HostComponent = () => {
    return (
        <div>
            <h2>Lesson #2</h2>
            <ColorStringParent/>
            <div className={classes.flexInline}>
                <PropsOutputComponent text="Hello everybody!"/>
                <PropsOutputComponent text="Some text #2!"/>
            </div>
            <WithChildrenComponent>
                <span className={classes.bgGrey}>This is  &lt;span&gt; inside "WithChildren" component</span>
            </WithChildrenComponent>
        </div>
    );
};

export default Lesson2HostComponent;
