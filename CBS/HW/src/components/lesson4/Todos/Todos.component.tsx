import React, {Component} from 'react';
import axios from "axios";
import classes from "./Todos.component.module.scss"

type Users = {
    [key: string]: Todo[];
};

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface Props {
}

interface State {
    users: Users
    todos: Todo[]
}

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

class TodosComponent extends Component<Props, State> {

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
        return (
            <div className={classes.wrapper}>
                {this.getUsersLayout()}
            </div>
        );
    }
}

export default TodosComponent;
