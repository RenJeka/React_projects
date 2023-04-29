import React, {Component} from 'react';
import {Color, ColorString} from '../../../barrel';

interface Props {

}

interface State {
    // childComponent?: any
}

class ColorStringParent extends Component<Props, State> {

    public childComponent: any ;
    public state:State = {

    }

    render() {
        return (
            <div>
                <button onClick={() => {this.childComponent.resetColor()}}>Reset Color</button>
                <ColorString
                    ref={(node) => { this.childComponent = node}}
                />
            </div>
        );
    }
}

export default ColorStringParent;
