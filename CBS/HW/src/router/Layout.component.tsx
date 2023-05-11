import React from 'react';
import {FooterComponent, HeaderComponent} from "../barrel";
import {Outlet} from "react-router";

const LayoutComponent = () => {
    return (
        <section>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </section>
    );
};

export default LayoutComponent;
