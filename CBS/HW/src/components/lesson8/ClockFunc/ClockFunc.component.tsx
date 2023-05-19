import React, {useEffect, useState} from 'react';

const ClockFuncComponent = () => {

    const [date, setDate] = useState<Date>(new Date());
    let timerID: NodeJS.Timer | undefined;

   function tick() {
       setDate(new Date());
    }

    useEffect(() => {

        timerID = setInterval(
            () => {
                tick()
            }, 1000
        )

        return () => {
            clearInterval(timerID);
            // console.log('Bue, Clock!');
        }
    })

    return (
        <div>
            <h4>Clock with functional component:</h4>
            <h5>Now is: {date.toLocaleTimeString()}.</h5>
        </div>
    );
}

export default ClockFuncComponent;
