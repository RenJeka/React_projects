import React from 'react';
import classes from './ReactMemo.component.module.scss'

interface Props {
    factorialNumber?: number
}

const ReactMemoComponent = (props: Props) => {

    const {
        factorialNumber = 0
    } = props;

    function calculateFactorial(factorialNumber: number): number {
        if (factorialNumber < 0)
            return -1;
        else if (factorialNumber == 0)
            return 1;
        else {
            return (factorialNumber * calculateFactorial(factorialNumber - 1));
        }
    }

    const factorialResult = (() => {
        console.log('calculateFactorial called')
        return calculateFactorial(factorialNumber);
    })();

    return (
        <div className={classes.wrapper}>
            <h5>ReactMemo component</h5>
            <h6>Factorial Result: {factorialResult}</h6>
        </div>
    );
};


// export default ReactMemoComponent;
export default React.memo(ReactMemoComponent);
