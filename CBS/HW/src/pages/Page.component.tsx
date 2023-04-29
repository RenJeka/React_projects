import React, {Component} from 'react';
import {Counter, Lesson1Component, Lesson2Component, Lesson2HostComponent} from "../barrel";
import ClockComponent from "../components/Clock/Clock.component";
import ListComponent from "../components/List/list.component";

interface Props {

}

interface State {
    arrayToRender: string[];
}
class PageComponent extends Component<Props, State> {

    state: State = {
        arrayToRender: ['item1', 'item2', 'item3']
    }

    render() {
        return (
            <div>
                <Lesson1Component myColor={"grey"} size={36}/>
                <hr/>
                <Counter name={"Counter1"}/>
                <hr/>
                <Lesson2HostComponent/>
                <Lesson2Component/>
                <hr/>
                <ClockComponent/>
                <hr/>
                <ListComponent />
            </div>
        );
    }
}

export default PageComponent;
