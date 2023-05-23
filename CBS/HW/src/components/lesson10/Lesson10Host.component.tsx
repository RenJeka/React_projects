import React from 'react';
import {AuthComponent, ErrorBoundaryComponent, PostsComponent} from "../../barrel";
import {Link, Outlet} from "react-router-dom";

const Lesson10HostComponent = () => {
    return (
        <ErrorBoundaryComponent>
            <div>
                <h2>Lesson #10</h2>

                <Link to={"posts"}>Posts</Link>
                <Outlet/>
            </div>
        </ErrorBoundaryComponent>
    );
};

export default Lesson10HostComponent;
