import React, {Component} from 'react';
import {connect} from "react-redux";
import {Store} from "redux";
import {changeTitle, TitleActions} from "./action";
import {MyStore} from "../../barrel";
interface Props {
    title: string,
    titleFromStore: string,
    dispatch: any
}

interface State {
}
class TitleComponent extends Component<Props, State> {

    clickHandler() {

    }

    render() {
        const {title, titleFromStore, dispatch} = this.props;
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.titleFromStore}</h1>
                <button onClick={() => dispatch(changeTitle("New String"))}>Change title button</button>
            </div>
        );
    }
}

const mapStateToProps = (store: MyStore) => {
    return {
        titleFromStore: store.title
    }
};


export default connect(mapStateToProps)(TitleComponent);
