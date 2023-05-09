import React, {Component, FormEvent} from 'react';
import classes from "./AsyncTodos.component.module.scss"
import {IAsyncTodos, MyStore, Todo, Users} from "../../../barrel";
import {connect} from "react-redux";
import {addAsyncTodoActionCreator, loadAsyncTodosActionCreator} from "./asyncTodos.actions";

interface Props {
    todos: IAsyncTodos,
    dispatch: any
}

// interface State {
//     todos
// }

class AsyncTodosComponent extends Component<Props> {

    componentDidMount(): void {
        this.props.dispatch(loadAsyncTodosActionCreator())
    }

    render() {
        const users = AsyncTodosComponent.groupTodosByUsers(this.props.todos.todos)
        return (
            <article aria-busy={this.props.todos.loading} className={classes.wrapper}>
                {this.getUsersLayout(users)}
            </article>
        );
    }

    static groupTodosByUsers(array: Todo[]): Users {
        return array.reduce((result: Users, currentValue) => {
            (result[currentValue["userId"]] = result[currentValue["userId"]] || []).push(currentValue);
            return result;
        }, {});
    }

    private getTodosForUserLayout(userTodos: Todo[]) {
        return userTodos.map((todo: Todo) => {
            return  <div key={'todo_' + todo.id} className={classes.todo}>
                        <input key={'completed_' + todo.id} type="checkbox" defaultChecked={todo.completed}/>
                        <li key={'taskName_' + todo.id}>{todo.title}</li>
                    </div>
        })
    }

    private addTodo(event: FormEvent<HTMLFormElement>, userId: string) {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget)

        const userTitle: string = (formData.get('title') || '').toString();
        const userCompleted: boolean = !!formData.get('completed');

        const usersTodo: Todo = {
            userId: parseInt(userId),
            id: Date.now(),
            title: userTitle,
            completed: userCompleted
        };
        console.log('usersTodo: ', usersTodo);
        this.props.dispatch(addAsyncTodoActionCreator(usersTodo));
    }

    private getUsersLayout(users: Users) {
        const usersLayout: any[] = [];
        for (const usersLayoutKey in users) {
            // if (!users.hasOwnProperty(usersLayoutKey)) return
            usersLayout.push(<article key={'userTodos_' + usersLayoutKey} className={classes.user}>
                                <header key={'userHeader_' + usersLayoutKey}>User {usersLayoutKey} :</header>
                                {this.getTodosForUserLayout(users[usersLayoutKey])}
                                <footer>
                                    <form
                                        className={classes.form}
                                        onSubmit={(e) => this.addTodo(e, usersLayoutKey)
                                        }>
                                        <label>
                                            Title:
                                            <input name={'title'} type="text" placeholder={"ToDo's title: "}/>
                                        </label>
                                        <label>
                                            Completed:   
                                            <input name={'completed'} type="checkbox"/>
                                        </label>
                                        <button
                                            aria-busy={this.props.todos.operationLoading}
                                            type={"submit"}
                                        >Add Todo</button>
                                    </form>

                                </footer>
                            </article>
            );
        }
        return usersLayout;
    }
}

const mapStateToProps = (store: MyStore) => {
    return {
        todos: store.asyncTodos
    }
}

export default connect(mapStateToProps)(AsyncTodosComponent);
