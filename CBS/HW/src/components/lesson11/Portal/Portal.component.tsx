import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
    children: JSX.Element[]
}

const PortalComponent = (props: Props) => {
    return  ReactDOM.createPortal(props.children, document.getElementById('modal') as HTMLElement);
};

export default PortalComponent;
