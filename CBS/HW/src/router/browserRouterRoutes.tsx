import {createBrowserRouter} from "react-router-dom";
import LayoutComponent from "./Layout.component";
import {
    HomeComponent,
    Lesson1HostComponent,
    Lesson2HostComponent,
    Lesson3HostComponent,
    Lesson4HostComponent,
    Lesson5HostComponent,
    Lesson6HostComponent,
    Lesson7HostComponent,
    Lesson8HostComponent,
    PageComponent
} from "../barrel";
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutComponent/>,
        children: [
            {
                index: true,
                path: "/",
                element: <HomeComponent/>,
            },
            {
                path: "/page",
                element: <PageComponent/>,
            },
            {
                path: "/lesson-1",
                element: <Lesson1HostComponent/>,
            },
            {
                path: "/lesson-2",
                element: <Lesson2HostComponent/>,
            },
            {
                path: "/lesson-3",
                element: <Lesson3HostComponent/>,
            },
            {
                path: "/lesson-4",
                element: <Lesson4HostComponent/>,
            },
            {
                path: "/lesson-5",
                element: <Lesson5HostComponent/>,
            },
            {
                path: "/lesson-6",
                element: <Lesson6HostComponent/>,
            },
            {
                path: "/lesson-7",
                element: <Lesson7HostComponent/>,
            },
            {
                path: "/lesson-8",
                element: <Lesson8HostComponent/>,
            },

        ]
    },

]);
