import React, {Component, FormEvent} from 'react';
import classes from "./TodoList.component.module.scss";
import {ITodoList, MyStore, TodoListItem} from "../../../barrel";
import {connect} from "react-redux";
import {addTodoListAction, deleteTodoListAction, toggleCheckTodoListAction} from "./TodoList.actions";
import IconComponent from './Icon/Icon.component';
import {IconTypes} from "./Icon/icons";
import {Button, ScopedCssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import TodoDialogComponent from "./TodoModal/TodoDialog.component";
import CssBaseline from "@mui/material/CssBaseline";

interface Props {
    todoList: ITodoList,
    dispatch: any
}

interface State {
    isModalOpen: boolean
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


class TodoListComponent extends Component<Props, State> {

    state: State = {
        isModalOpen: false
    }

    private deleteTodo(todo: TodoListItem) {
        this.props.dispatch(deleteTodoListAction(todo));
    }

    private markChecked(todo: TodoListItem) {
        this.props.dispatch(toggleCheckTodoListAction(todo));
    }

    private getTodosLayout() {
        return this.props.todoList.todos.map((todo: TodoListItem) => {
            return <tr key={'todo_' + todo.id} className={classes.todo}>
                <td>
                    {todo.completed
                    && <IconComponent
                        type={IconTypes.CHECKMARK}
                        className={classes.checkmarkIcon}
                        size={"30px"}
                    />
                    }
                </td>

                <td>
                    <li key={'taskName_' + todo.id}>{todo.title}</li>
                </td>
                <td>
                    <IconComponent
                        type={IconTypes.CROSS}
                        className={classes.deleteBtn}
                        size={"30px"}
                        onClick={() => {
                            this.deleteTodo(todo)
                        }}
                    />
                </td>
                <td>
                    <Button
                        variant="outlined"
                        className={classes.inlineButton}
                        onClick={() => {
                            this.markChecked(todo)
                        }}
                    >Check
                    </Button>
                </td>
            </tr>
        })
    }


    // private addTodo(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault();
    //     const formData: FormData = new FormData(event.currentTarget)
    //
    //     const userTitle: string = (formData.get('title') || '').toString();
    //     const userCompleted: boolean = !!formData.get('completed');
    //
    //     const usersTodo: TodoListItem = {
    //         id: Date.now(),
    //         title: userTitle,
    //         completed: userCompleted
    //     };
    //     console.log('usersTodo: ', usersTodo);
    //     this.props.dispatch(addTodoListAction(usersTodo, event.currentTarget));
    // }

    private toggleModalHandler() {
        this.setState((state: State) => {
            return {
                isModalOpen: !state.isModalOpen
            }
        })
    }

    private applyModalHandler(returnedObj: {todoTitle: string}) {
        console.log('returnedObj:', returnedObj);
        this.toggleModalHandler();
    }


    render() {
        return (
            <ThemeProvider theme={darkTheme}>
                {/*<CssBaseline />*/}
                <ScopedCssBaseline>
                    <TodoDialogComponent
                        open={this.state.isModalOpen}
                        onApply={(returnedObj) => {this.applyModalHandler(returnedObj)}}
                        onClose={() => {this.toggleModalHandler()}}
                    />
                    <div>
                        <h3>TODO List:</h3>
                        <table>
                            <tbody>
                            {this.getTodosLayout()}
                            </tbody>
                        </table>

                        <Button variant="contained" onClick={() => {
                            this.toggleModalHandler()
                        }}>
                            <IconComponent
                                type={IconTypes.PLUS}
                                color={"lightgreen"}
                                size={"30px"}
                            />
                            Add Todo
                        </Button>
                    </div>
                </ScopedCssBaseline>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (store: MyStore) => {
    return {
        todoList: store.todoList
    }
};

export default connect(mapStateToProps)(TodoListComponent);
