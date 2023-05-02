import React from 'react';
import './assets/styles/pico.min.css';
import './App.scss';
import {PageComponent} from "./barrel";
import {connect} from "react-redux";
import {changeTitle} from "./components/Title/action";
import {MyStore} from "./redux/initialStore";

interface Props {
    dispatch: any;
    // children?: JSX.Element|JSX.Element[];
}


class App extends React.Component<Props> {
    render() {
        const {dispatch} = this.props;
        return (
            <div className="App">
                <PageComponent/>
                <button onClick={() => dispatch(changeTitle("Change title from APP"))}>Change title from APP</button>
            </div>
        );
    }
}

export default connect()(App);
