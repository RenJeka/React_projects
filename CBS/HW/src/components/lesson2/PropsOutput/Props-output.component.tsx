import React, {Component} from 'react';
import classes from "./Props-output.component.module.scss"

interface Props {
    text: string
}

interface State {
}
class PropsOutputComponent extends Component<Props, State> {
    render() {
        return (
            <div className={classes.wrapper}>
                <h3 className={classes.text}>{this.props.text}</h3>
            </div>
        );
    }
}

export default PropsOutputComponent;
