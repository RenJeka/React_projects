import React from 'react';
import {useParams} from "react-router";

const ISGoodComponent = () => {

    const params = useParams();

    return (
        <div>
            Good # {params.goodId}
        </div>
    );
};

export default ISGoodComponent;
