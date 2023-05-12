import React from 'react';
import {DidUpdateCounterComponent, ShowHideParentComponent, TodosComponent} from "../../barrel";

const Lesson4HostComponent = () => {
    return (
        <div>
            <h2>Lesson 4</h2>
            <ShowHideParentComponent/>
            <DidUpdateCounterComponent/>
            <TodosComponent/>
        </div>
    );
};

export default Lesson4HostComponent;
