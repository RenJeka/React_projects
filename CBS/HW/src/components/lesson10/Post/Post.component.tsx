import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios, {AxiosResponse} from "axios";
import {Post} from "../../../barrel";

const PostComponent = () => {

    const {postId} = useParams();

    const [post, setPost] = useState<Post>();
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response: AxiosResponse<Post>) => {
                setPost(response.data);
            });
    }, [postId]);
    return (
        <div>
            POST: {post?.title}
        </div>
    );
};

export default PostComponent;
