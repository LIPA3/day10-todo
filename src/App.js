import { use, useEffect, useReducer } from "react";
import "./App.css"
import { todoReducer } from "./reduces/TodoReducer";
import { TodoContext } from "./contexts/TodoContext";
import { RouterProvider } from "react-router";
import route from "./routes/Routes";
import api from "./api/mockApi";
function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        loadTodos()
            .then(todos => {
                dispatch({ type: "LOAD_TODOS", payload: todos });
            });
    }, [dispatch]);
    return (
        <div className="App">
            <TodoContext.Provider value={{ state, dispatch }}>
                <RouterProvider router={route}></RouterProvider>
            </TodoContext.Provider>
        </div>
    );
}
function loadTodos() {
    return api.get("/todos")
        .then((response) => response.data);
}
export default App;