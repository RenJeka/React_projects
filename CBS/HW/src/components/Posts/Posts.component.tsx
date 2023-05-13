import React, {useEffect} from 'react';
import classes from "./Posts.component.module.scss"
import {useDispatch, useSelector} from "react-redux";
import postActionCreator, {PostsAsyncAction} from "./posts.async.actions";
import {IAsyncPosts, MyStore} from "../../barrel";
import {ThunkDispatch} from "redux-thunk";

// interface Props {
//     posts: IAsyncPosts;
//     dispatch: any;
// }

interface State {
}

type TodoDispatch = ThunkDispatch<State, any, PostsAsyncAction>;

const PostsComponent = () => {

    // debugger;
        // setPosts(posts: any[]) {
    //     return posts.map(post => <li key={post.id}>{post.title}</li>);
    // }
    // this.props.dispatch(postActionCreator())
    const dispatch: TodoDispatch = useDispatch();
    dispatch(postActionCreator())
    // useEffect(() => {
    //     dispatch(postActionCreator())
    //     return () => {
    //         console.log('bye!!');
    //
    //     }
    // })

    const posts: IAsyncPosts = useSelector<MyStore, IAsyncPosts>((store: MyStore) => store.posts)


    return (
        <ul className={classes.listWrapper}>
            {
                posts.loading
                    ? <span>Loading...</span>
                    : posts.posts.map(post => <li key={post.id}>{post.title}</li>)
            }
            {/*{this.setPosts(this.state.posts)}*/}
        </ul>
    )
}

export default PostsComponent;
