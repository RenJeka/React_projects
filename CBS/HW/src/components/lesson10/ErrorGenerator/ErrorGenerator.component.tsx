import React, {useState} from 'react';

const ErrorGeneratorComponent = () => {
    const [isNeedShowError, setIsNeedShowError] = useState<boolean>(false);

    if (isNeedShowError) {
        throw Error(`
                This is test Error for Lesson 10 Task #2 
                This message should output into console and should handle by ErrorBoundaryComponent
            `);
    }
    return (
        <article>
            <hgroup>
                <h5>Error Generator Component</h5>
                <span>See message in console</span>
            </hgroup>

            <button onClick={() => {setIsNeedShowError(true)}}>Generate Error</button>
        </article>
    );
};

export default ErrorGeneratorComponent;
