import React from 'react';
import { useParams } from 'react-router';

const PostComponent = () => {

    const {postId} = useParams();

    return (
        <div>
            POST # {postId}
        </div>
    );
};

export default PostComponent;
