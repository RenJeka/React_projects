import React, {Component, FormEvent} from 'react';
import classes from "./TodoList.component.module.scss";
import {ITodoList, MyStore, TodoListItem} from "../../../barrel";
import {connect} from "react-redux";
import {addTodoListAction} from "./TodoList.actions";

interface Props {
    todoList: ITodoList,
    dispatch: any
}

class TodoListComponent extends Component<Props> {

    private getTodosLayout() {
        return this.props.todoList.todos.map((todo: TodoListItem) => {
            return  <div key={'todo_' + todo.id} className={classes.todo}>
                        <input
                            key={'completed_' + todo.id}
                            type="checkbox"
                            defaultChecked={todo.completed}
                            disabled={true}
                        />
                        <li key={'taskName_' + todo.id}>{todo.title}</li>
                    </div>
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
        this.props.dispatch(addTodoListAction(usersTodo));
    }

    render() {
        return (
            <article>
                <header >TODO List:</header>
                {this.getTodosLayout()}
                <footer>
                    <form
                        className={classes.form}
                        onSubmit={(e) => this.addTodo(e)}
                    >
                        <label>
                            Title:
                            <input name={'title'} type="text" placeholder={"ToDo's title: "}/>
                        </label>
                        <label>
                            Completed:
                            <input name={'completed'} type="checkbox"/>
                        </label>
                        <button
                            aria-busy={this.props.todoList.operationLoading}
                            type={"submit"}
                        >Add Todo</button>
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
