import React, {Component} from 'react';
import {MyStore} from "../../redux/initialStore";
import {connect} from "react-redux";
import {incActionCreator} from "./counterActions";
import classes from "./ReduxCounter.component.module.scss";


interface Props {
    counterFromStore: number;
    dispatch: any;
}

class ReduxCounter extends Component<Props> {

    render() {
        return (
            <div className={classes.counterContainer}>
                <p>{this.props.counterFromStore}</p>
                <div className={classes.counterControls}>
                    <button onClick={() => this.props.dispatch(incActionCreator())}> Increment</button>
                    {/*<button onClick={() => this.setState((prevState) => ({count: prevState.count - 1}))}> Decrement</button>*/}
                    {/*<button onClick={() => this.setState(() => ({count: 0}))}> Reset</button>*/}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (store: MyStore) => {
    return {
        counterFromStore: store.count
    }
};

export default connect(mapStateToProps)(ReduxCounter);
