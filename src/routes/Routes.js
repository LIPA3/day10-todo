import {createBrowserRouter} from "react-router";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import TodoDetailPage from "../pages/TododetailPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import DoneListPage from "../pages/DoneListPage";
const route=createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout></DefaultLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/todoList',
                element:<HomePage></HomePage>
            },
            {
                path:'/todos/:id',
                element:<TodoDetailPage></TodoDetailPage>
            },
            {
                path:'/donelist',
                element:<DoneListPage></DoneListPage>
            },
            {
                path:'/about',
                element:<AboutPage></AboutPage>
            }
        ]
    }
])
export default route;