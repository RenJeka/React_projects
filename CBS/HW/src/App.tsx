import React from 'react';
import './assets/styles/pico.min.css';
import './App.scss';
import {
    Counter,
    Lesson1Component,
    Lesson2HostComponent
} from "./barrel";

interface IApp {
    // children?: JSX.Element|JSX.Element[];
}


class App extends React.Component<IApp> {
    render() {
        return (
            <div className="App">
                <Lesson1Component myColor={"grey"} size={36}/>
                <hr/>
                <Counter name={"Counter1"}/>
                <hr/>
                <Lesson2HostComponent/>
            </div>
        );
    }
}

export default App;
