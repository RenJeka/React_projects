import React, {Component} from 'react';
import {
    Counter,
    Lesson1Component,
    ColorString,
    ColorStringParent,
    PostsComponent,
    ClockComponent,
    ListComponent
} from "../barrel";
import classes from "./Page.component.module.scss"

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
            <div className={classes.pageWrapper}>

                <details>
                    <summary>
                        Lesson #1
                    </summary>
                   <Lesson1Component myColor={"grey"} size={36}/>
                   <hr/>
                   <h4> Counter</h4>
                   <Counter name={"Counter1"}/>
                </details>

                <details>
                    <summary>
                        Lesson #2
                    </summary>
                    <ColorStringParent/>
                </details>

                <details>
                    <summary>
                        Lesson #3
                    </summary>
                    {/*<ClockComponent/>*/}
                    {/*<hr/>*/}
                    {/*<ListComponent />*/}
                    {/*<hr/>*/}
                    <PostsComponent/>
                </details>

            </div>
        );
    }
}

export default PageComponent;
