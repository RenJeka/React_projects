import React, {useState} from 'react';

interface Props {
    myProp: string
}

const FunctionPostComponent = (props: Props) => {

    const [val, setVal] = useState("Functional component init state value")

    return (
        <article className={'container'}>
            <h4>Hello in functional Component!</h4>
            <table>
                <tr>
                    <td>Prop.myProp: </td>
                    <td>{props.myProp}</td>
                </tr>
                <tr>
                    <td>State:</td>
                    <td>{val}</td>
                </tr>
            </table>

            <button onClick={() => {setVal("Click message for functional component!")}}>set Value</button>
        </article>
    );
};

export default FunctionPostComponent;
