import React, {Component} from 'react';
import classes from "./AsyncTodos.component.module.scss"
import axios from "axios";
import {Todo, Users} from "../../../barrel";
import {MyStore} from "../../../redux/initialStore";
import {IAsyncTodos} from "./asyncTodos.actions";
import {connect} from "react-redux";

interface Props {
    todos: IAsyncTodos,
    dispatch: any
}

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

class AsyncTodosComponent extends Component<Props> {

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
            return <div key={'todo_' + todo.id} className={classes.todo}>
                <input key={'completed_' + todo.id} type="checkbox" defaultChecked={todo.completed}/>
                <li key={'taskName_' + todo.id}>{todo.title}</li>
            </div>
        })
    }

    private getUsersLayout(users: Users) {
        const usersLayout: any[] = [];
        for (const usersLayoutKey in users) {
            usersLayout.push(<article key={'userTodos_' + usersLayoutKey} className={classes.user}>
                    <header key={'userHeader_' + usersLayoutKey}>User {usersLayoutKey} :</header>
                    <body>{this.getTodosForUserLayout(users[usersLayoutKey])}</body>
                    <footer><a href="#" role="button">Add Todo:</a></footer>
                </article>
            )
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
