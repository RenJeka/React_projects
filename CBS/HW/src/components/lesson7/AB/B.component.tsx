import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MyStore} from "../../../barrel";
import {incActionCreator} from "../../ReduxCounter/counterActions";


const BComponent = () => {

    const dispatch = useDispatch();

    function clickHandler() {
        dispatch(incActionCreator());
    }
    return (
        <div style={{width: 300, border: "2px dotted lightblue", padding: 15}}>
            Component B
            <button
                onClick={clickHandler}
            >Increase</button>
        </div>
    );
};

export default BComponent;
