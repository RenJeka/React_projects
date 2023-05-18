import React from 'react';
import {ClockFuncComponent, FucReduxCounterComponent, FuncCounter, FunctionPostComponent} from "../../barrel";
import { UseEffectComponent } from './../../barrel';

const Lesson8HostComponent = () => {
    return (
        <div>
            <h2>Lesson #8</h2>
            <UseEffectComponent/>
            <hr/>
            <FunctionPostComponent myProp={"Property, passed from parent component"}/>
            <FuncCounter name={"My functional Counter-1"}/>
            <FucReduxCounterComponent/>
            <hr/>
            <ClockFuncComponent/>
            <hr/>
        </div>
    );
};

export default Lesson8HostComponent;
