import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

interface Props {
    children: JSX.Element[]
}

const PortalComponent = (props: Props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return ReactDOM.createPortal(props.children, document.getElementById('modal') as HTMLElement);
};

export default PortalComponent;
