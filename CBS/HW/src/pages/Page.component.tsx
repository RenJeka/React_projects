import React, {Component} from 'react';
import {Counter, Lesson1Component, ColorString, ColorStringParent} from "../barrel";
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
                <h3>Lesson #1</h3>
                <Lesson1Component myColor={"grey"} size={36}/>
                <h4> Counter</h4>
                <Counter name={"Counter1"}/>
                <hr/>
                <h3>Lesson #2</h3>
                <ColorStringParent/>
                <hr/>
                {/*<ClockComponent/>*/}
                {/*<hr/>*/}
                {/*<ListComponent />*/}
            </div>
        );
    }
}

export default PageComponent;
