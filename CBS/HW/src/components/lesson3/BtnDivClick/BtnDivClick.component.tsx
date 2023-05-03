import React, {Component, MouseEvent} from 'react';
import classes from "./BtnDivClick.component.module.scss";


interface Props {
}

interface State {
}

class BtnDivClickComponent extends Component<Props, State> {

    divClickHandler(e: MouseEvent<HTMLDivElement> ) {
        console.log("Div Clicked!");
    }

    buttonClickHandler(e: MouseEvent<HTMLButtonElement> ) {
        e.stopPropagation();
        console.log("Button Clicked!");
    }

    render() {
        return (
            <div
                className={classes.wrapper}
                onClick={(e) => {this.divClickHandler(e)}}
            >
                <button onClick={(e) => {this.buttonClickHandler(e)}}>Button 1</button>
            </div>
        );
    }
}

export default BtnDivClickComponent;
