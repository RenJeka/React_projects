import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import classes from "./TodoDialog.component.module.scss"
import {Button, Dialog, ScopedCssBaseline} from "@mui/material";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {useDispatch, useSelector} from "react-redux";
import {addTodoListAction, ITodoListAction, toggleCheckTodoListAction} from "../TodoList.actions";
import { ThunkDispatch } from 'redux-thunk';
import {ITodoList, MyStore} from "../../../../barrel";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
    open: boolean,
    onApply?: (returnedObj: {todoTitle: string}) => void
    onClose?: () => void
}

interface State {
    todoTitle: string;
    btnDisable: boolean;
}

type TodoDispatch = ThunkDispatch<State, any, ITodoListAction>;


const TodoDialogComponent = ({open, onApply = () => {} , onClose = () => {}}: Props) => {
    const [btnDisable, setBtnDisable] = useState<boolean>(true);
    const [todoTitle, setTodoTitle] = useState<string>("");
    const dispatch: TodoDispatch = useDispatch();
    const todoList = useSelector<MyStore, ITodoList>((store) => store.todoList) as ITodoList;

    function submitHandler() {
        dispatch(addTodoListAction(
            {id: Date.now(),title: todoTitle, completed: false},
            () => {onApply({todoTitle})}
        ))
    }

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setBtnDisable(event.target.value.length <= 0);
        setTodoTitle(event.target.value);
    }

    function enterHandler(e: KeyboardEvent<HTMLButtonElement | HTMLDivElement>) {
        if (e.key === 'Enter') {
            if (todoTitle.length <= 0) return
            submitHandler();
        }
    };

    return (
        <ScopedCssBaseline>
            <Dialog
                open={open}
                onClose={() => { onClose()}}
                // className={classes.dialog}
                onKeyPress={enterHandler}
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

                    {
                        todoList.operationLoading
                        ? <CircularProgress />
                        : <input
                                type="text"
                                autoFocus={true}
                                onChange={(e) => {
                                     onChangeHandler(e)
                                 }}
                                placeholder={"todo's title"}
                            />
                    }

                </DialogContent>
                <DialogActions>

                    <Button
                        disabled={btnDisable}
                        variant="contained"
                        onClick={() => {submitHandler()}}
                    >Ready</Button>
                </DialogActions>
            </Dialog>
        </ScopedCssBaseline>
    );
};

export default TodoDialogComponent;



// const FucReduxCounterComponent = () => {
//
//     const dispatch = useDispatch();
//     const count = useSelector<MyStore, number>((store) => store.count) as number;
//
//     return (
//         <article className={classes.counterContainer}>
//             <header>Redux counter (functional component)</header>
//             <p >{count}</p>
//             <div className={classes.counterControls}>
//                 <button onClick={() => dispatch(incActionCreator())}> Increment</button>
//                 <button onClick={() => dispatch(decActionCreator())}> Decrement</button>
//                 <button onClick={() => dispatch(resetActionCreator())}> Reset</button>
//             </div>
//         </article>
//     );
// };
//
// export default FucReduxCounterComponent;
