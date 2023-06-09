import React, {Component} from 'react';
import classes from "./DidUpdateCounter.component.module.scss";

interface Props {
}

interface State {
    updateCounter: number;
}

class DidUpdateCounterComponent extends Component<Props, State> {

    state: State = {
        updateCounter: 0
    }

    private didUpdateCounter = 0;

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        console.log('shouldComponentUpdate. nextState:', nextState);

        return this.didUpdateCounter < 4;
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        this.didUpdateCounter = this.state.updateCounter;
        alert(`Component Did update. "didUpdateCounter": ${this.didUpdateCounter}`);
    }

    private trigUpdate() {
        this.setState((state: State) => {
            return {
                updateCounter: state.updateCounter + 1
            }
        });
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <h4>This is "DidUpdateCounter"</h4>
                <button onClick={() => {this.trigUpdate()}}>Update Component</button>
                <h3>Counter after Did Update: {this.didUpdateCounter}</h3>
            </div>
        );
    }
}

export default DidUpdateCounterComponent;
