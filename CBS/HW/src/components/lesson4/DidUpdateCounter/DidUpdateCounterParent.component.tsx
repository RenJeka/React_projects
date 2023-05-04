import React, {Component} from 'react';
import {ShowHideComponent} from "../../../barrel";

interface Props {
}

interface State {
    showComponent: boolean
}

class DidUpdateCounterParentComponent extends Component<Props, State> {

    state: State = {
        showComponent: false
    }

    private showHideHandler() {
        this.setState((state: State) => {
            return {
                showComponent: !state.showComponent
            }
        });
    }



    render() {
        return (
            <div>
                <button style={{width: 300}} onClick={() => {this.showHideHandler()}}>Show / Hide component</button>
                {
                    this.state.showComponent
                    ? <ShowHideComponent/>
                    : null
                }
            </div>
        );
    }
}

export default DidUpdateCounterParentComponent;
