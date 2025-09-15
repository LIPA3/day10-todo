import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reduces/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
import {Outlet,NavLink,createBrowserRouter} from "react-router";
import {useRouteError} from "react-router";
// import {} from "react-router-dom";

const route=createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout></DefaultLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<TodoList></TodoList>
            }
        ]
    }
])
function ErrorPage(){
    const error=useRouteError();
    return <div>
        {JSON.stringify(error)}
        {error.status === 404
         ? <div>Page not found<span>try</span></div>
         : <div>{JSON.stringify(error)}</div>}
    </div>
}
function DefaultLayout(){
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
}
export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];
function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div className="App">
            <h2 className={"title"}>Todo List</h2>
            <TodoContext.Provider value={{state, dispatch}}>
                <TodoList></TodoList>
            </TodoContext.Provider>
        </div>
    );
}

export default App;