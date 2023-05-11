import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, Dialog, ScopedCssBaseline} from "@mui/material";
import IconComponent from '../Icon/Icon.component';
import {IconTypes} from "../Icon/icons";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import classes from "./TodoDialog.component.module.scss"

interface Props {
    open: boolean,
    onApply: (returnedObj: {todoTitle: string}) => void
    onClose?: () => void
}

interface State {
    todoTitle: string;
    btnDisable: boolean;
}


const TodoDialogComponent = (props: Props) => {
    const [btnDisable, setBtnDisable] = useState<boolean>(false);
    const [todoTitle, setTodoTitle] = useState<string>("");

    function submitHandler() {
        props.onApply({todoTitle})
    }

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setBtnDisable(event.target.value.length <= 0);
        setTodoTitle(event.target.value);
    }

    return (
        <ScopedCssBaseline>
            <Dialog
                open={props.open}
                onClose={() => { props.onClose && props.onClose()}}
                // className={classes.dialog}
            >
                <DialogTitle>Add todo's title:</DialogTitle>
                <DialogContent>

                    {/*<TextField*/}
                    {/*    autoFocus*/}
                    {/*    fullWidth*/}
                    {/*    margin="dense"*/}
                    {/*    name={'title'}*/}
                    {/*    label="Title:"*/}
                    {/*    placeholder={"Title"}*/}
                    {/*    variant="standard"*/}
                    {/*    className={classes.textField}*/}
                    {/*    onChange={(e) => {*/}
                    {/*        onChangeHandler(e as ChangeEvent<HTMLInputElement>)*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <input type="text"
                           onChange={(e) => {
                               onChangeHandler(e)
                           }}
                           placeholder={"todo's title"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button disabled={btnDisable} variant="contained" onClick={() => {submitHandler()}}>Ready</Button>
                </DialogActions>
            </Dialog>
        </ScopedCssBaseline>
    );
};

export default TodoDialogComponent;
