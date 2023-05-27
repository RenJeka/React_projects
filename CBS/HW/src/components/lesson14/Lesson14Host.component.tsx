import React from 'react';
import {CallbackHookComponent, MemoHookComponent} from "../../barrel";

const Lesson14HostComponent = () => {


    return (
        <div>
            <h2>Lesson #14</h2>
            <MemoHookComponent/>
            <hr/>
            <br/>
            <br/>
            <CallbackHookComponent/>
        </div>
    );
};

export default Lesson14HostComponent;
