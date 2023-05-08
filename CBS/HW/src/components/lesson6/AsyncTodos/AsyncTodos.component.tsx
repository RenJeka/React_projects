import React, {Component} from 'react';
import classes from "./AsyncTodos.component.module.scss"
import axios from "axios";
import {Todo, Users} from "../../../barrel";




interface Props {
}

interface State {
    users: Users
    todos: Todo[]
}

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

class AsyncTodosComponent extends Component<Props, State> {

    state: State = {
        users: {} as Users,
        todos: [] as Todo[]
    }

    componentDidMount(): void {
        axios(TODOS_URL)
            .then(res => {
                    console.log('Users:', this.groupTodosByUsers(res.data),);

                    this.setState(
                        {
                            users: this.groupTodosByUsers(res.data),
                            todos: res.data
                        })
                }
            )
    }

    getTodosForUserLayout(userTodos: Todo[]) {
        return userTodos.map((todo: Todo) => {
            return <div key={'todo_' + todo.id} className={classes.todo}>
                <input key={'completed_' + todo.id} type="checkbox" defaultChecked={todo.completed}/>
                <li key={'taskName_' + todo.id}>{todo.title}</li>
            </div>
        })
    }

    getUsersLayout() {
        const usersLayout: any[] = [];
        for (const usersLayoutKey in this.state.users) {
            usersLayout.push(<ul key={'userTodos_' + usersLayoutKey} className={classes.user}>
                    <h5 key={'userHeader_' + usersLayoutKey}>User {usersLayoutKey} :</h5>
                    {this.getTodosForUserLayout(this.state.users[usersLayoutKey])}
                </ul>
            )
        }
        return usersLayout;
    }

    private groupTodosByUsers(array: Todo[]): Users {
        return array.reduce((result: Users, currentValue) => {
            (result[currentValue["userId"]] = result[currentValue["userId"]] || []).push(currentValue);
            return result;
        }, {});
    }

    render() {
        // return (
        //     <div className={classes.wrapper}>
        //         <h5>Async Todos</h5>
        //         <ul>
        //             Loading...
        //         </ul>
        //     </div>
        // );

        return (
            <div className={classes.wrapper}>
                {this.getUsersLayout()}
            </div>
        );
    }
}

export default AsyncTodosComponent;
