import React from 'react';
import BComponent from "./B.component";
import {useSelector} from "react-redux";
import {MyStore} from "../../../barrel";

const AComponent = () => {

    const counter = useSelector<MyStore, number>(store => store.count);

    return (
        <article>
            <header>Component A</header>
            <BComponent/>
            <footer>
                {counter}
            </footer>
        </article>
    );
};

export default AComponent;
