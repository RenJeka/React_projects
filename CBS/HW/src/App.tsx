import React from 'react';
import './assets/styles/pico.min.css';
import './App.scss';
import {
    Counter,
    Lesson1Component,
    Lesson2HostComponent
} from "./barrel";
import ClockComponent from "./components/Clock/Clock.component";
import PageComponent from "./pages/Page.component";

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
