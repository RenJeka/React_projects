import React from 'react';
import {
    JsonFormComponent,
    NumberConverterParentComponent,
    ReduxCounter,
    ReduxRandomCounterComponent
} from "../../barrel";

const Lesson5HostComponent = () => {
    return (
        <div>
            <h2>Lesson #5</h2>
            {/*<TitleComponent title={"Default"}/>*/}
            {/*<ReduxCounter/>*/}
            <ReduxRandomCounterComponent/>
            <JsonFormComponent/>
            <NumberConverterParentComponent/>
            {/*<TitleComponent title={"Default"}/>*/}
            <ReduxCounter/>
        </div>
    );
};

export default Lesson5HostComponent;
