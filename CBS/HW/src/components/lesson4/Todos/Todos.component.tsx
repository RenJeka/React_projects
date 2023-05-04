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
                        todos: res.data
                    })
                }
            )
    }

    getTodosLayout() {
        // return posts.map(post => <li key={post.id}>{post.title}</li>);
        return this.state.todos.map((todo: Todo) => {
            return <div key={'todo_' + todo.id} className={classes.todo}>
                <input key={'completed_' + todo.id} type="checkbox" defaultChecked={todo.completed}/>
                <span key={'userId_' + todo.id}>{todo.userId}</span>
                <li key={'taskName_' + todo.id}>{todo.title}</li>
                {/*<ul className={classes.listWrapper}>*/}

                {/*</ul>*/}
            </div>
        })
    }

    private getTodoLayout(todo: Todo) {

    }

    private groupTodosByUsers(array: Todo[]) {
        return array.reduce((result: Users, currentValue) => {
            (result[currentValue["userId"]] = result[currentValue["userId"]] || []).push(currentValue);
            // (result[currentValue["userId"]] = result[currentValue[key]] || []).push(
            //     currentValue
            // );
            return result;
        }, {});
    }

    render() {
        return (
            <div className={classes.wrapper}>
                {this.getTodosLayout()}
                {/*{this.setPosts(this.state.posts)}*/}
            </div>
        );
    }
}

export default TodosComponent;
