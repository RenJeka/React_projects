import {createBrowserRouter} from "react-router-dom";
import LayoutComponent from "./Layout.component";
import {
    HomeComponent,
    PageComponent,
    Lesson1HostComponent,
    Lesson2HostComponent,
    Lesson3HostComponent,
    Lesson4HostComponent,
    Lesson5HostComponent,
    Lesson6HostComponent,
    Lesson7HostComponent,
    Lesson8HostComponent,
    Lesson9HostComponent,
    ProtectedRouteWrapperComponent,
    LoginComponent,
    IAm18Component,
    Lesson10HostComponent,
    PostsComponent,
    PostComponent,
    InternetStoreComponent,
    ISHomeComponent,
    ISContactsComponent,
    ISProductsComponent,
    ISProductComponent,
    Lesson11HostComponent,
    AuthComponent,
    ErrorPage,
    NotFoundPageComponent,
    Lesson14HostComponent,
} from '../barrel';
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutComponent/>,
        errorElement: <ErrorPage/>,
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
            {
                path: "/lesson-9",
                element: <Lesson9HostComponent/>,
                children: [
                    {
                        path: "iam18",
                        // element: <ProtectedRouteWrapperComponent children={IAm18Component}/>,
                        element: <ProtectedRouteWrapperComponent
                                    pathToRedirect={"/login"}
                                    protectedComponentsName={"iAm18"}
                                >
                                    <IAm18Component/>
                                </ProtectedRouteWrapperComponent>
                    },
                    {
                        path: "internet-store",
                        element: <InternetStoreComponent/>,
                        children: [
                            {
                                index: true,
                                path: "home",
                                element: <ISHomeComponent/>,
                            },
                            {
                                path: "contacts",
                                element: <ISContactsComponent/>,
                            },
                            {
                                path: "products",
                                element: <ISProductsComponent/>,
                                // children: [
                                //     {
                                //         path: ":goodId",
                                //         element: <ISGoodComponent/>,
                                //     }
                                // ]
                            },
                            {
                                path: "products/:productId",
                                element: <ISProductComponent/>,
                            }
                        ]
                    },
                ]
            },
            {
                path: "/lesson-10",
                element: <Lesson10HostComponent/>,
                children: [
                    {
                        path: "posts",
                        // element: <PostsComponent/>,
                        element: <ProtectedRouteWrapperComponent
                            protectedComponentsName={"auth"}
                        >
                            <PostsComponent/>
                        </ProtectedRouteWrapperComponent>,
                        children: [
                            {
                                path: ":postId",
                                element: <PostComponent/>,
                            }
                        ]
                    }
                ]
            },
            {
                path: "login",
                element: <LoginComponent/>,
            },
            // {
            //     path: "auth",
            //     element: <AuthComponent/>,
            // },
            {
                path: "/lesson-11",
                element: <Lesson11HostComponent/>,
                children: [
                    {
                        path: "auth",
                        element: <AuthComponent/>,
                    }
                ]
            },
            {
                path: "/lesson-14",
                element: <Lesson14HostComponent/>,
                children: [
                    {
                        path: "auth",
                        element: <AuthComponent/>,
                    }
                ]
            },
            {
                path: "*",
                element: <NotFoundPageComponent/>
            }


        ]
    },

]);
