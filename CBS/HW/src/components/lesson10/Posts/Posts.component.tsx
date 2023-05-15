import React, {useEffect} from 'react';
import classes from "./Posts.component.module.scss"
import {useDispatch, useSelector} from "react-redux";
import postActionCreator, {PostsAsyncAction} from "./posts.async.actions";
import { IAsyncPosts, MyStore } from '../../../barrel';
import {ThunkDispatch} from "redux-thunk";
import { Link, Outlet } from 'react-router-dom';

// interface Props {
//     posts: IAsyncPosts;
//     dispatch: any;
// }

interface State {
}

type PostDispatch = ThunkDispatch<State, any, PostsAsyncAction>;

const PostsComponent = () => {

    // debugger;
        // setPosts(posts: any[]) {
    //     return posts.map(post => <li key={post.id}>{post.title}</li>);
    // }
    // this.props.dispatch(postActionCreator())
    const dispatch: PostDispatch = useDispatch();
    const asyncPosts: IAsyncPosts = useSelector<MyStore, IAsyncPosts>((store: MyStore) => store.posts);
    // dispatch(postActionCreator())
    useEffect(() => {
        // tslint:disable-next-line:no-console
        // console.log('posts', posts);
        dispatch(postActionCreator())
        return () => {
            console.log('bye!!');

        }
    }, [dispatch])


    function getPosts(posts: IAsyncPosts) {
        return posts.posts.map(post => {
            // return <li key={post.id}>{post.title}</li>
            return <li key={post.id}><Link to={`${post.id}`}>{post.title}</Link></li>
        });
    }

    return (<div>
               <ul className={classes.listWrapper}>
                   {
                       asyncPosts.loading
                           ? <span>Loading...</span>
                           : getPosts(asyncPosts)
                   }
                   {/*{this.setPosts(this.state.posts)}*/}
               </ul>
                <hr/>
                <p>Here  would be a post</p>
                <Outlet/>
           </div>
        )
}

export default PostsComponent;
