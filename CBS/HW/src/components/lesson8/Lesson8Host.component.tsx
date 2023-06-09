import React from 'react';
import {
    ClockFuncComponent,
    FucReduxCounterComponent,
    FuncCounter,
    FunctionPostComponent,
    ReactMemoParentComponent,
} from '../../barrel';
import { UseEffectComponent } from './../../barrel';

const Lesson8HostComponent = () => {
    return (
        <div>
            <h2>Lesson #8</h2>
            <ClockFuncComponent/>
            <hr/>
            <UseEffectComponent/>
            <hr/>
            <ReactMemoParentComponent />
            <hr/>
            <br/>
            <br/>
            <h2>Class work:</h2>
            <FunctionPostComponent myProp={"Property, passed from parent component"}/>
            <FuncCounter name={"My functional Counter-1"}/>
            <FucReduxCounterComponent/>
        </div>
    );
};

export default Lesson8HostComponent;
