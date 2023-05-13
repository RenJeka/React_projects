import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LoginComponent } from '../../barrel';

const Lesson9HostComponent = () => {

    return (
        <div>
            <h2>Lesson #9</h2>
            {/*<LoginComponent/>*/}

            <Link to={"/login"} >Login</Link>
            <Link to={"iam18"} >Go to 18+ content</Link>
            <Outlet/>
        </div>
    );
};

export default Lesson9HostComponent;
