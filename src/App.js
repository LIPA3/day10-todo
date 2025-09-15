import {use, useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reduces/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import { RouterProvider} from "react-router";
import route from "./routes/Routes";
import axios from "axios";

const api = axios.create({
    baseURL: "https://68c7acbf5d8d9f5147328947.mockapi.io/",
    headers:{
        "Content-Type":"application/json",
    },
    timeout:10000
});
function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        api.get("/todos")
        .then((response) => response.data)
        .then(todos => {
            dispatch({type: "LOAD_TODOS", payload: todos});
        });
    }, []);
    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
               <RouterProvider router={route}></RouterProvider>
            </TodoContext.Provider>
        </div>
    );
}

export default App;