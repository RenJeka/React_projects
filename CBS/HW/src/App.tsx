import React from 'react';
import './assets/styles/pico.min.css';
import './App.scss';
import {PageComponent} from "./barrel";
import {connect} from "react-redux";
import {Routes} from "react-router";

class Props {
}

class App extends React.Component<Props> {
    render() {
        return (
            <div className="App">

                {/*<Routes>*/}

                {/*</Routes>*/}


                {/*<PageComponent/>*/}
            </div>
        );
    }
}

export default connect()(App);
