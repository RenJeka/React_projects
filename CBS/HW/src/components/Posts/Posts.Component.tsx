import React, {Component} from 'react';
import axios from "axios";



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
        // const postTags = [];
        // for (let i = 0; i < posts.length; i++) {
        //     postTags.push(<p key={posts[i].id}>{posts[i].title}</p>)
        // }
        return posts.map(post => <div key={post.id}>{post.title}</div>)
    }

    render() {
        return (
            <div>
                {/*{this.state.posts}*/}
                {/*{this.state.posts.map(post => <div key={post.id}>{post.title}</div>)}*/}
                {this.setPosts(this.state.posts)}
            </div>
        );
    }
}

export default PostsComponent;
