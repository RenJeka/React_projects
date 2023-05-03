import React, {Component} from 'react';
import {
    Counter,
    Lesson1Component,
    ColorString,
    ColorStringParent,
    PostsComponent,
    ClockComponent,
    PropsOutputComponent,
    WithChildrenComponent,
    TitleComponent,
    ReduxCounter,
    ListComponent, TwoListAndButtonComponent, BtnDivClickComponent
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
                    <Counter name={"Lesson 3 Counter: "}/>
                    {/*<ClockComponent/>*/}
                    {/*<hr/>*/}
                    {/*<PostsComponent/>*/}
                    <ListComponent
                        listItems={["Davi", "Davi", "Bernard", "Bernard", "Conar", "Conar", "Aaron", "Jeka", "Kate", "Marry", "Darrius", "Eli", "Eryk", "Jaise", "Eoner"]}
                        needUnique={true}
                        needSort={true}
                        color={'orange'}
                    />
                    <hr/>
                    <TwoListAndButtonComponent listItems={["Davi", "Bernard", "Conar", "Aaron", "Jeka", "Kate", "Marry", "Darrius", "Eli", "Eryk", "Jaise", "Eoner"]}/>

                    <BtnDivClickComponent/>
                </details>

                <details>
                    <summary>
                        Lesson #5
                    </summary>

                    <TitleComponent title={"Default"}/>
                    <ReduxCounter/>

                </details>
            </div>
        );
    }
}

export default PageComponent;
