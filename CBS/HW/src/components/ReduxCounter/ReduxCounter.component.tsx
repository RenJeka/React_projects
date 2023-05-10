import React, {Component} from 'react';
import {connect} from "react-redux";
import {decActionCreator, incActionCreator, resetActionCreator} from "./counterActions";
import classes from "./ReduxCounter.component.module.scss";
import {MyStore} from "../../barrel";


interface Props {
    counterFromStore: number;
    dispatch: any;
}

class ReduxCounter extends Component<Props> {

    render() {
        return (
            <article className={classes.counterContainer}>
                <header>Redux counter (class component)</header>
                <p>{this.props.counterFromStore}</p>
                <div className={classes.counterControls}>
                    <button onClick={() => this.props.dispatch(incActionCreator())}> Increment</button>
                    <button onClick={() => this.props.dispatch(decActionCreator())}> Decrement</button>
                    <button onClick={() => this.props.dispatch(resetActionCreator())}> Reset</button>
                </div>
            </article>
        );
    }
}


const mapStateToProps = (store: MyStore) => {
    return {
        counterFromStore: store.count
    }
};

export default connect(mapStateToProps)(ReduxCounter);
