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
    ListComponent,
    TwoListAndButtonComponent,
    BtnDivClickComponent,
    ShowHideComponent,
    ShowHideParentComponent,
    DidUpdateCounterComponent,
    TodosComponent,
    ReduxRandomCounterComponent,
    JsonFormComponent,
    NumberConverterParentComponent,
    JsonFormValidationComponent,
    ListReduxComponent,
    AsyncTodosComponent,
    TodoListComponent,
    AComponent,
    FunctionPostComponent,
    FuncCounter,
    FucReduxCounterComponent
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
                    <ListComponent
                        listItems={["Davi", "Davi", "Bernard", "Bernard", "Conar", "Conar", "Aaron", "Jeka", "Kate", "Marry", "Darrius", "Eli", "Eryk", "Jaise", "Eoner"]}
                        needUnique={true}
                        needSort={true}
                        // TODO: uncomment to check
                        // color={'cyan'}
                        // colors = {['green', 'yellow', 'lightblue', 'lightgrey', 'orange', 'pink']}
                    />
                    <hr/>
                    <TwoListAndButtonComponent listItems={["Davi", "Bernard", "Conar", "Aaron", "Jeka", "Kate", "Marry", "Darrius", "Eli", "Eryk", "Jaise", "Eoner"]}/>

                    <BtnDivClickComponent/>
                </details>

                <details>
                    <summary>
                        Lesson #4
                    </summary>
                    <ShowHideParentComponent/>
                    <DidUpdateCounterComponent/>
                    <TodosComponent/>
                </details>

                <details>
                    <summary>
                        Lesson #5
                    </summary>

                    {/*<TitleComponent title={"Default"}/>*/}
                    {/*<ReduxCounter/>*/}
                    <ReduxRandomCounterComponent/>
                    <JsonFormComponent/>
                    <NumberConverterParentComponent/>
                    {/*<TitleComponent title={"Default"}/>*/}
                    <ReduxCounter/>
                </details>

                <details>
                    <summary>
                        Lesson #6
                    </summary>

                    <PostsComponent/>
                    <JsonFormValidationComponent/>
                    <AsyncTodosComponent/>
                </details>

                <details>
                    <summary>
                        Lesson #7
                    </summary>

                    <ListReduxComponent/>
                    <TodoListComponent/>
                    <AComponent/>
                </details>

                <details>
                    <summary>
                        Lesson #8
                    </summary>

                    <FunctionPostComponent myProp={"Property, passed from parent component"}/>
                    <FuncCounter name={"My functional Counter-1"}/>
                    <FucReduxCounterComponent/>

                </details>

            </div>
        );
    }
}

export default PageComponent;
