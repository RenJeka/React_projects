import {createBrowserRouter} from "react-router-dom";
import LayoutComponent from "./Layout.component";
import {HomeComponent, PageComponent} from "../barrel";
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutComponent/>,
        children: [
            {
                path: "/page",
                element: <PageComponent/>,
            },
            {
                path: "/home",
                element: <HomeComponent/>,
            }
        ]
    },

]);
