import React from 'react';
import {AsyncTodosComponent, JsonFormValidationComponent} from "../../barrel";

const Lesson6HostComponent = () => {
    return (
        <div>
            <h2>Lesson #6</h2>
            {/*<PostsComponent/>*/}
            <JsonFormValidationComponent/>
            <AsyncTodosComponent/>
        </div>
    );
};

export default Lesson6HostComponent;
