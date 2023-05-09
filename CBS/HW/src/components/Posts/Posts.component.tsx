import React, {Component} from 'react';
import classes from "./Posts.component.module.scss"
import {connect} from "react-redux";
import postActionCreator from "./posts.async.actions";
import {Dispatch} from "redux";
import {IAsyncPosts, MyStore} from "../../barrel";

interface Props {
    posts: IAsyncPosts;
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

        return (
            <ul className={classes.listWrapper}>
                {
                    loading
                        ? <span>Loading...</span>
                        : posts.map(post => <li key={post.id}>{post.title}</li>)
                }
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
