import {use, useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reduces/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import { RouterProvider} from "react-router";
import route from "./routes/Routes";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];
const api = axios.create({
    baseURL: "https://68c7acbf5d8d9f5147328947.mockapi.io/",
    headers:{
        "Content-Type":"application/json",
    },
    timeout:10000
});
function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    useEffect(() => {
        api.get("/todos").then((response) => {
            const todos = response.data;
            dispatch({ type: "SET_TODOS", payload: todos });
        }).catch((error) => {
            console.error("Error fetching todos:", error);
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