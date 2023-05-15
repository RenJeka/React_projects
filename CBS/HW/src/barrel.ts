import reactLogo from "./assets/images/reactLogo.png"
import reactWallpaper from "./assets/images/react_wallpaper.jpg"
import { Color } from "./common/enum/Color"
import Lesson1Component from "./components/Lesson1Component/Lesson1Component";
import Counter from "./components/lesson3/Counter/Counter";
import ColorString from "./components/lesson2/ColorString/ColorString";
import ColorStringParent from "./components/lesson2/ColorStringParent/ColorStringParent";
import TodosComponent from "./components/lesson4/Todos/Todos.component";
import ClockComponent from "./components/Clock/Clock.component";
import PageComponent from "./pages/Page.component";
import PropsOutputComponent from "./components/lesson2/PropsOutput/Props-output.component";
import WithChildrenComponent from "./components/lesson2/WithChildren/WithChildren.component";
import TitleComponent from "./components/Title/Title.component";
import ReduxCounter from "./components/ReduxCounter/ReduxCounter.component";
import ListComponent from "./components/lesson3/List/List.component";
import TwoListAndButtonComponent from "./components/lesson3/TwoListAndButton/TwoListAndButton.component";
import BtnDivClickComponent from "./components/lesson3/BtnDivClick/BtnDivClick.component";
import ShowHideComponent from "./components/lesson4/ShowHideParent/ShowHide/ShowHide.component";
import ShowHideParentComponent from "./components/lesson4/ShowHideParent/ShowHideParent.component";
import DidUpdateCounterComponent from "./components/lesson4/DidUpdateCounter/DidUpdateCounter.component";
import ReduxRandomCounterComponent from "./components/lesson5/ReduxRandomCounter/ReduxRandomCounter.component";
import JsonFormComponent from "./components/lesson5/JsonForm/JsonForm.component";
import NumberConverterParentComponent from "./components/lesson5/NumberConverterParent/NumberConverterParent.component";
import JsonFormValidationComponent from "./components/lesson6/JsonFormValidation/JsonFormValidation.component";
import ListReduxComponent from "./components/lesson7/ListRedux/ListRedux.component";
import PostsComponent from "./components/lesson10/Posts/Posts.component";
import AsyncTodosComponent from "./components/lesson6/AsyncTodos/AsyncTodos.component";
import { IAsyncTodos, ITodoList, Todo, TodoListItem, Users } from "./common/interfaces/Todo";
import { IAsyncPosts, Post } from "./common/interfaces/Posts";
import { MyStore } from "./common/interfaces/Store";
import initialStore from "./redux/initialStore";
import TodoListComponent from "./components/lesson7/TodoList/TodoList.component";
import AComponent from "./components/lesson7/AB/A.component";
import FunctionPostComponent from "./components/lesson8/FunctionPost/FunctionPost.component";
import FuncCounter from "./components/lesson8/FuncCounter/FuncCounter";
import FucReduxCounterComponent from "./components/lesson8/ReduxCounter/FucReduxCounter.component";
import HomeComponent from "./components/Home/Home.component";
import HeaderComponent from "./components/Header/Header.component";
import FooterComponent from "./components/Footer/Footer.component";
import Lesson1HostComponent from "./components/Lesson1Component/Lesson1Hosh.component";
import Lesson2HostComponent from "./components/lesson2/Lesson2Host.component";
import Lesson3HostComponent from "./components/lesson3/Lesson3Host.component";
import Lesson4HostComponent from "./components/lesson4/Lesson4Host.component";
import Lesson5HostComponent from "./components/lesson5/Lesson5Host.component";
import Lesson6HostComponent from "./components/lesson6/Lesson6Host.component";
import Lesson7HostComponent from "./components/lesson7/Lesson7Host.component";
import Lesson8HostComponent from "./components/lesson8/Lesson8Host.component";
import { IProtectedComponents } from "./common/interfaces/ProtectedComponents";
import Lesson9HostComponent from './components/lesson9/Lesson9Host.component';
import IAm18Component from "./components/lesson9/IAm18/IAm18.component";
import ProtectedRouteWrapperComponent from "./components/lesson9/ProtectedRouteWrapper/ProtectedRouteWrapper.component";
import LoginComponent from "./components/lesson9/Login/Login.component";
import AuthComponent from "./components/lesson10/Auth/Auth.component";
import Lesson10HostComponent from "./components/lesson10/Lesson10Host.component";
import PostComponent from "./components/lesson10/Post/Post.component";

const images = {
    reactLogo: reactLogo,
    reactWallpaper: reactWallpaper
}

export {
    initialStore,
    images,
    Color,
    Lesson1Component,
    ColorString,
    Counter,
    ColorStringParent,
    TodosComponent,
    ClockComponent,
    PageComponent,
    PropsOutputComponent,
    WithChildrenComponent,
    TitleComponent,
    ReduxCounter,
    ListComponent,
    TwoListAndButtonComponent,
    BtnDivClickComponent,
    ShowHideComponent,
    ShowHideParentComponent,
    DidUpdateCounterComponent,
    ReduxRandomCounterComponent,
    JsonFormComponent,
    NumberConverterParentComponent,
    PostsComponent,
    JsonFormValidationComponent,
    ListReduxComponent,
    AsyncTodosComponent,
    TodoListComponent,
    AComponent,
    FunctionPostComponent,
    FuncCounter,
    FucReduxCounterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Lesson1HostComponent,
    Lesson2HostComponent,
    Lesson3HostComponent,
    Lesson4HostComponent,
    Lesson5HostComponent,
    Lesson6HostComponent,
    Lesson7HostComponent,
    Lesson8HostComponent,
    Lesson9HostComponent,
    IAm18Component,
    ProtectedRouteWrapperComponent,
    LoginComponent,
    AuthComponent,
    Lesson10HostComponent,
    PostComponent
};

export type {
    MyStore,
    Todo,
    Users,
    IAsyncTodos,
    Post,
    IAsyncPosts,
    TodoListItem,
    ITodoList,
    IProtectedComponents
};
