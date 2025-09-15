import { useEffect, useReducer } from "react";
import "./App.css"
import { todoReducer } from "./reduces/TodoReducer";
import { TodoContext } from "./contexts/TodoContext";
import { RouterProvider } from "react-router";
import route from "./routes/Routes";
import { useTodoService } from "./useTodoService";
function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const { loadTodos } = useTodoService();
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

export default App;