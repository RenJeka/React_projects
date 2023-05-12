import React from 'react';
import {FucReduxCounterComponent, FuncCounter, FunctionPostComponent} from "../../barrel";

const Lesson8HostComponent = () => {
    return (
        <div>
            <h2>Lesson #8</h2>
            <FunctionPostComponent myProp={"Property, passed from parent component"}/>
            <FuncCounter name={"My functional Counter-1"}/>
            <FucReduxCounterComponent/>
        </div>
    );
};

export default Lesson8HostComponent;
