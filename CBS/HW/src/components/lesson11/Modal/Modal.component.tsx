import React from 'react';
import PortalComponent from '../Portal/Portal.component';
import classes from "./Modal.component.module.scss"


interface Props {
    text?: string,
    closeHandler?: () => {},
    action?: any
}

const ModalComponent = (props: Props) => {

    const {text = '', closeHandler = null, action} = props;
    return (
        <div>
            <PortalComponent>
                <div className={classes.modalWrapper}>

                </div>
                <div className="modal">
                    {text }

                    <div className={classes.modalBtn}>
                        <button className={classes.btn}>Close</button>
                        {action}
                    </div>
                </div>
            </PortalComponent>
        </div>
    );
};

export default ModalComponent;
