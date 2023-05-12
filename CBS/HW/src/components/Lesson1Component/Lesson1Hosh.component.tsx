import React from 'react';
import {Counter, Lesson1Component} from "../../barrel";

const Lesson1HostComponent = () => {
    return (
        <div>
            <h2>Lesson #1</h2>
            <Lesson1Component myColor={"grey"} size={36}/>
            <hr/>
            <h4> Counter</h4>
            <Counter name={"Counter1"}/>
        </div>
    );
};

export default Lesson1HostComponent;
