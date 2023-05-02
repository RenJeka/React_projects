import React, {Component} from 'react';
import {
    Counter,
    Lesson1Component,
    ColorString,
    ColorStringParent,
    PostsComponent,
    ClockComponent,
    ListComponent,
    PropsOutputComponent,
    WithChildrenComponent,
    TitleComponent
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
                    <div className={classes.flexInline}>
                        <PropsOutputComponent text="Hello everybody!"/>
                        <PropsOutputComponent text="Some text #2!"/>
                    </div>
                    <WithChildrenComponent>
                        <span className={classes.bgGrey}>This is  &lt;span&gt; inside "WithChildren" component</span>
                    </WithChildrenComponent>
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

                <TitleComponent title={"Default"}/>

            </div>
        );
    }
}

export default PageComponent;
