import React, {Component} from 'react';
import classes from "./Counter.module.scss";


interface Props {
    name: string;
}

interface State {
    count: number,
}

class Counter extends Component<Props, State> {

    state = {
        count: 0
    }

    render() {
        return (
            <div className={classes.counterContainer}>

                <p>{this.props.name}</p>
                <p>{this.state.count}</p>
                <div className={classes.counterControls}>
                    <button onClick={() => this.setState((prevState) => ({count: prevState.count + 1}))}> Increment</button>
                    <button onClick={() => this.setState((prevState) => ({count: prevState.count - 1}))}> Decrement</button>
                    <button onClick={() => this.setState(() => ({count: 0}))}> Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter;
