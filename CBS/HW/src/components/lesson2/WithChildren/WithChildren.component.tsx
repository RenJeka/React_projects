import React, {Component} from 'react';
import classes from "./WithChildren.component.module.scss";

interface Props {
    children?: any
}

interface State {
}
class WithChildrenComponent extends Component<Props, State> {
    render() {
        return (
            <div className={classes.wrapper}>
                <h5>This is "WithChildren" component</h5>
                {this.props.children}
            </div>
        );
    }
}

export default WithChildrenComponent;
