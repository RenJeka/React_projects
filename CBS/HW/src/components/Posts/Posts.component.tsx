import React, {Component} from 'react';
import axios from "axios";
import classes from "./Posts.component.module.scss"
import {connect} from "react-redux";
import {MyStore, StorePosts} from "../../redux/initialStore";
import postActionCreator from "./posts.async.actions";
import {Dispatch} from "redux";

interface Post {
    id:number,
    userId: number,
    title: string,
    body:string
}

interface Props {
    posts: StorePosts;
    dispatch: any;
}

class PostsComponent extends Component<Props> {

    componentDidMount(): void {
        this.props.dispatch(postActionCreator())
    }

    // setPosts(posts: any[]) {
    //     return posts.map(post => <li key={post.id}>{post.title}</li>);
    // }

    render() {

        const {posts, loading} = this.props.posts;

        console.log('posts', posts);
        console.log('props', this.props);


        return (
            <ul className={classes.listWrapper}>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
                {/*{this.setPosts(this.state.posts)}*/}
            </ul>
        );
    }
}

const mapStateToProps = (store: MyStore) => {
    return {
        posts: store.posts
    }
}

export default connect(mapStateToProps)(PostsComponent);
