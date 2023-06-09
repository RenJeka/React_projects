import React from 'react';
import {ErrorBoundaryComponent, ErrorGeneratorComponent} from "../../barrel";
import {Link, Outlet} from "react-router-dom";

const Lesson10HostComponent = () => {
    return (
        <div>
            <h2>Lesson #10</h2>

            <ErrorBoundaryComponent>
                <ErrorGeneratorComponent/>
            </ErrorBoundaryComponent>

            <Link to={"posts"}>Posts</Link>
            <Outlet/>

        </div>
    );
};

export default Lesson10HostComponent;
