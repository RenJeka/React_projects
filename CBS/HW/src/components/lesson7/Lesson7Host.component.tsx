import React from 'react';
import {AComponent, ListReduxComponent, TodoListComponent} from "../../barrel";

const Lesson7HostComponent = () => {
    return (
        <div>
            <h2>Lesson #7</h2>
            <ListReduxComponent/>
            <TodoListComponent/>
            <AComponent/>
        </div>
    );
};

export default Lesson7HostComponent;
