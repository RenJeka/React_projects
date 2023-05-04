import React, {Component} from 'react';
import axios from "axios";
import classes from "./Todos.component.module.scss"

interface Todo {
    userId: number,
    id:number,
    title: string,
    completed: boolean
}

interface Props {
}

interface State {
    todos: Todo[]
}

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

class TodosComponent extends Component<Props, State> {

    state:State  = {
        todos: [] as Todo[]
    }

    componentDidMount(): void {
        axios(TODOS_URL)
            .then(res => this.setState({todos: res.data}))
    }

    getTodosLayout() {
        // return posts.map(post => <li key={post.id}>{post.title}</li>);
        return this.state.todos.map((todo: Todo) => {
            return <div className={classes.todo}>
                        <input key={todo.id} type="checkbox" checked={todo.completed}/>
                        <span key={todo.id}>{todo.userId}</span>
                        <li key={todo.id}>{todo.title}</li>
                        {/*<ul className={classes.listWrapper}>*/}

                        {/*</ul>*/}
                    </div>
            })
    }

    private getTodoLayout(todo: Todo) {

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
