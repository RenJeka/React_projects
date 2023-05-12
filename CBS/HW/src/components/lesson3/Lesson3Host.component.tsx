import React from 'react';
import {BtnDivClickComponent, Counter, ListComponent, TwoListAndButtonComponent} from "../../barrel";

const Lesson3HostComponent = () => {
    return (
        <div>
            <h2>Lesson #3</h2>
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
        </div>
    );
};

export default Lesson3HostComponent;
