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
            <div className={[classes.counterContainer, classes.border].join(' ')}>

                <p className={classes.counterName}>  {this.props.name}</p>
                <span className={classes.counterCountNumber}>{this.state.count}</span>
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
