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
            console.log('Bue, Clock!');
        }
    })

    return (
        <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default ClockFuncComponent;
