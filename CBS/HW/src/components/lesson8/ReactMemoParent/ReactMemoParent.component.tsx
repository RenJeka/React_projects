import React from 'react';
import classes from './ReactMemoParent.component.module.scss'
import ReactMemoComponent from "./ReactMemo/ReactMemo.component";
import {useInput} from "../../../barrel";

const ReactMemoParentComponent = () => {
    const titleInput = useInput<string>('');
    const numberInput = useInput<number>(0);

    return (
        <div className={classes.wrapper}>
            <div>
                <h3>Parent's component title: </h3>
                <h4>{titleInput.value}</h4>
            </div>
            <ReactMemoComponent factorialNumber={numberInput.value}/>
            <div className={classes.inputWrapper}>
                <input type="text" placeholder={'Enter parent\'s title:'} {...titleInput}/>
                <input type="number" min={0} max={100} placeholder={'Enter number:'} {...numberInput}/>
            </div>
        </div>
    );
};



export default ReactMemoParentComponent;
