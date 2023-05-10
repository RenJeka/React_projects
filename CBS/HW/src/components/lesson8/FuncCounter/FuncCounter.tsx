import React, {Component, useState} from 'react';
import classes from "./FuncCounter.module.scss";


interface Props {
    name: string;
}

const FuncCounter = (props: Props) => {
    let [count, setCount] = useState(0);

    return (
            <div className={[classes.counterContainer, classes.border].join(' ')}>

                <p className={classes.counterName}>  {props.name}</p>
                <span className={classes.counterCountNumber}>{count}</span>
                <div className={classes.counterControls}>
                    <button onClick={() => {setCount(++count)}}> Increment</button>
                    <button onClick={() => {setCount(--count)}}> Decrement</button>
                    <button onClick={() => {setCount(0)}}> Reset</button>
                </div>
            </div>
        );
};

export default FuncCounter;
