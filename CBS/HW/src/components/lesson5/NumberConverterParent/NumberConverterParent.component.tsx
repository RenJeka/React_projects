import React, {Component} from 'react';
import NumberConverterComponent from './NumberConverter/NumberConverter.component';
import classes from "./NumberConverterParent.component.module.scss"
interface Props {
}

interface State {
}

class NumberConverterParentComponent extends Component<Props, State> {
    render() {
        return (
            <div>
                <NumberConverterComponent fraction={1}/>
                <NumberConverterComponent fraction={2}/>
            </div>
        );
    }
}

export default NumberConverterParentComponent;
