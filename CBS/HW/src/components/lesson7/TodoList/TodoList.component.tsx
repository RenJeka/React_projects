import React, {Component, FormEvent} from 'react';
import classes from "./TodoList.component.module.scss";
import {ITodoList, MyStore, TodoListItem} from "../../../barrel";
import {connect} from "react-redux";
import {addTodoListAction, deleteTodoListAction, toggleCheckTodoListAction} from "./TodoList.actions";
import IconComponent from './Icon/Icon.component';
import {IconTypes} from "./Icon/icons";

interface Props {
    todoList: ITodoList,
    dispatch: any
}

class TodoListComponent extends Component<Props> {

    private deleteTodo(todo: TodoListItem) {
        this.props.dispatch(deleteTodoListAction(todo));
    }

    private markChecked(todo: TodoListItem) {
        this.props.dispatch(toggleCheckTodoListAction(todo));
    }

    private getTodosLayout() {
        return this.props.todoList.todos.map((todo: TodoListItem) => {
            return  <tr key={'todo_' + todo.id} className={classes.todo}>
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
                                onClick={() => {this.deleteTodo(todo)}}
                            />
                        </td>
                        <td>
                            <button
                                className={classes.inlineButton}
                                onClick={() => {this.markChecked(todo)}}
                            >Done</button>
                        </td>
                    </tr>
        })
    }

    private addTodo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget)

        const userTitle: string = (formData.get('title') || '').toString();
        const userCompleted: boolean = !!formData.get('completed');

        const usersTodo: TodoListItem = {
            id: Date.now(),
            title: userTitle,
            completed: userCompleted
        };
        console.log('usersTodo: ', usersTodo);
        this.props.dispatch(addTodoListAction(usersTodo, event.currentTarget));
    }

    render() {
        return (
            <article>
                <header >
                    TODO List:

                </header>
                <table>
                    {this.getTodosLayout()}
                </table>
                <footer>
                    <form
                        className={classes.form}
                        onSubmit={(e) => this.addTodo(e)}
                    >
                        <label>
                            Title:
                            <input name={'title'} type="text" placeholder={"ToDo's title: "}/>
                        </label>
                        {/*<label>*/}
                        {/*    Completed:*/}
                        {/*    <input name={'completed'} type="checkbox"/>*/}
                        {/*</label>*/}
                        <button
                            aria-busy={this.props.todoList.operationLoading}
                            type={"submit"}
                        >
                            <IconComponent
                                type={IconTypes.PLUS}
                                color={"lightgreen"}
                                size={"30px"}
                            />
                            Add Todo</button>
                    </form>

                </footer>
            </article>
        );
    }
}

const mapStateToProps = (store: MyStore) => {
    return {
        todoList: store.todoList
    }
};

export default connect(mapStateToProps)(TodoListComponent);
