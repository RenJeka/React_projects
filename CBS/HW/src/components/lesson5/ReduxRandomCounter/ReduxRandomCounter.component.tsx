import React, {Component} from 'react';
import classes from "./ReduxRandomCounter.component.module.scss";
import {Dispatch} from "redux";
import {
    decRandomCounterActionCreator,
    incRandomCounterActionCreator, randomIncRandomCounterActionCreator,
    resetRandomCounterActionCreator
} from "./randomCounterActions";
import {connect} from "react-redux";
import {MyStore} from "../../../barrel";


interface Props {
    randomCounterFromStore: number,
    dispatch: Dispatch
}

class ReduxRandomCounterComponent extends Component<Props> {


    private getRandomArbitrary(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    render() {
        return (
            <div className={[classes.counterContainer, classes.border].join(' ')}>

                <p className={classes.counterName}>Redux Random Counter</p>
                <span className={classes.counterCountNumber}>{this.props.randomCounterFromStore
                }</span>
                <div className={classes.counterControls}>
                    <button onClick={() => this.props.dispatch(incRandomCounterActionCreator())}> Increment</button>
                    <button onClick={() => this.props.dispatch(decRandomCounterActionCreator())}> Decrement</button>
                    <button onClick={() => this.props.dispatch(randomIncRandomCounterActionCreator(this.getRandomArbitrary(0, 20)))}> Random</button>
                    <button onClick={() => this.props.dispatch(resetRandomCounterActionCreator())}> Reset</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store: MyStore) => {
    return {
        randomCounterFromStore: store.randomCounter
    }
};

export default connect(mapStateToProps)(ReduxRandomCounterComponent);
