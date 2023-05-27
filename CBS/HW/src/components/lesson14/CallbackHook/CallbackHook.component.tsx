import React, {useCallback, useEffect, useState} from 'react';


const ItemList = ({getData = () => {}}) => {

    const [state, setState] = useState<any>(null);

    useEffect(() => {
        const data = getData();
        setState(data);
    }, [getData])
   return (
       <ul>
           {state?.map( (el:any) => <li key={el}>{el}</li>)}

       </ul>
   )
}

const CallbackHookComponent = () => {

    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(2);

    const getData = useCallback(() => {
        console.log('render!');
        return new Array(count2).fill(null).map((_, index) => {
            return `Element ${index + 1}`;
        })
    }, [count2]);

    // const getData = () => {
    //     console.log('render!');
    //     return new Array(count2).fill(null).map((_, index) => {
    //         return `Element ${index + 1}`;
    //     })
    // }

    return (
        <div>
            <h5>useCallback Hook Example</h5>
            <ItemList getData={getData}/>
            <div style={{display: 'flex', flexDirection: 'row', width: 300}}>
                <button value={count} onClick={() => {setCount(count + 1)}}>count</button>
                <button value={count2} onClick={() => {setCount2(count2 + 1)}}>count2</button>
            </div>
        </div>
    );
};

export default CallbackHookComponent;
