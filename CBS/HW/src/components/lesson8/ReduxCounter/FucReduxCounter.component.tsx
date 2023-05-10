import React from 'react';
import {decActionCreator, incActionCreator, resetActionCreator} from "../../ReduxCounter/counterActions";
import {useDispatch, useSelector} from "react-redux";
import {MyStore} from "../../../redux/initialStore";
import classes from "./FuncReduxCounter.component.module.scss"

const FucReduxCounterComponent = () => {

    const dispatch = useDispatch();
    const count = useSelector<MyStore, number>((store) => store.count) as number;

    return (
        <article className={classes.counterContainer}>
            <header>Redux counter (functional component)</header>
            <p >{count}</p>
            <div className={classes.counterControls}>
                <button onClick={() => dispatch(incActionCreator())}> Increment</button>
                <button onClick={() => dispatch(decActionCreator())}> Decrement</button>
                <button onClick={() => dispatch(resetActionCreator())}> Reset</button>
            </div>
        </article>
    );
};

export default FucReduxCounterComponent;
