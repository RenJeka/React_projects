import React from 'react';
import PortalComponent from '../Portal/Portal.component';
import classes from "./Modal.component.module.scss"


interface Props {
    text?: string,
    closeHandler?: any,
    action?: JSX.Element
}

const ModalComponent = (props: Props) => {

    const {text = '', closeHandler = null, action} = props;
    return (
        <div>
            <PortalComponent>
                <div className={classes.modalWrapper} onClick={closeHandler}></div>
                <div className={classes.modal}>
                    {text}

                    <div className={classes.modalButtons}>
                        <button className={classes.btn} onClick={closeHandler}>Close</button>
                        {action}
                    </div>
                </div>
            </PortalComponent>
        </div>
    );
};

export default ModalComponent;
