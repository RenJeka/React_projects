import React, {useMemo, useState} from 'react';


function computedFunc(state: number) {
    console.log('render!:');
    for (let i = 0; i < 900000000; i++) {}

    return state * 2;

}

const MemoHookComponent = () => {

    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(2);

    const computed = useMemo(() => computedFunc(count2), [count2]);
    // const computed = computedFunc(count2);

    return (
        <div>
            <h4>Memo Hook Example</h4>
            <h5>{count}, {computed}</h5>
            <button value={count} onClick={() => {setCount(count + 1)}}>count</button>
            <button value={count2} onClick={() => {setCount2(count2 + 1)}}>count2</button>

        </div>
    );
};

export default MemoHookComponent;
