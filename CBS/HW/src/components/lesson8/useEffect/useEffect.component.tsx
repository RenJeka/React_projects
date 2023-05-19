import React, { useEffect, useState } from 'react';
import classes from "./useEffect.component.module.scss";

const UseEffectComponent = () => {


    const [stateCounter, setStateCounter] = useState<number>(0);

    useEffect(() => {
        console.log('UseEffectComponent mounted!');


        // return () => {
        //     console.log('UseEffectComponent unmounted!');
        // }
    });

    useEffect(() => {
        setInterval(() => {
            setStateCounter((oldStateCounter: number) => {
                if (oldStateCounter < 5) {
                    return oldStateCounter + 1;
                }
                return oldStateCounter;
            });
        }, 1000)
    }, []);



    return (
        <div className={classes.wrapper}>
            UseEffect component
            <p>stateCounter: {stateCounter}</p>
        </div>
    );
};

export default UseEffectComponent;
