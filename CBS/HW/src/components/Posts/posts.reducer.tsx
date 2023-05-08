import initialStore, {StorePosts} from "../../redux/initialStore";
import {PostsAsyncAction, PostsAsyncActions} from "./posts.async.actions";

export const  postsReducer = (postsFromStore: StorePosts = initialStore.posts, action: PostsAsyncAction) => {
    switch (action.type) {
        case PostsAsyncActions.LOADING_START: {
            return {
                ...postsFromStore,
                loading: true
            };
        }

        case PostsAsyncActions.LOADING_END: {
            return {
                ...postsFromStore,
                loading: false,
                posts: action.payload
            };
        }

        case PostsAsyncActions.LOADING_ERROR: {
            return {
                ...postsFromStore,
                loading: false
            }
        }
        default: {
            return postsFromStore;
        }
    }
}
