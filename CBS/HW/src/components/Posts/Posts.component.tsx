import React, {Component} from 'react';
import axios from "axios";
import classes from "./Posts.component.module.scss"


interface Props {
}

interface State {
    posts: {
        id:number,
        userId: number,
        title: string,
        body:string
    }[]
}

class PostsComponent extends Component<Props, State> {

    state = {
        posts: []
    }

    componentDidMount(): void {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(res => this.setState({posts: res.data}))
    }

    setPosts(posts: any[]) {
        return posts.map(post => <li key={post.id}>{post.title}</li>);
    }

    render() {
        return (
            <ul className={classes.listWrapper}>
                {/*{this.state.posts.map(post => <div key={post.id}>{post.title}</div>)}*/}
                {this.setPosts(this.state.posts)}
            </ul>
        );
    }
}

export default PostsComponent;
