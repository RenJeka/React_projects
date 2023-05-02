import React from 'react';
import './assets/styles/pico.min.css';
import './App.scss';
import {PageComponent} from "./barrel";

interface IApp {
    // children?: JSX.Element|JSX.Element[];
}


class App extends React.Component<IApp> {
    render() {
        return (
            <div className="App">
                <PageComponent/>
            </div>
        );
    }
}

export default App;
