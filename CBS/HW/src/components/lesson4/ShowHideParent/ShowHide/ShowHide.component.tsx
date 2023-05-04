import React, {Component} from 'react';
import classes from "./ShowHide.component.module.scss";

interface Props {
}

interface State {
}

class ShowHideComponent extends Component<Props, State> {

    componentDidMount() {
        alert('Component opened!');
    }

    componentWillUnmount(): void {
        alert('Component closed!')
    }


    render() {
        return (
            <div className={classes.wrapper}>
                <h4>This is "ShowHideComponent"</h4>
            </div>
        );
    }
}

export default ShowHideComponent;
