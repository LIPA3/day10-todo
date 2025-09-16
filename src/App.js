import { useEffect, useReducer } from "react";
import "./App.css"
import { todoReducer } from "./reduces/TodoReducer";
import { TodoContext } from "./contexts/TodoContext";
import { RouterProvider } from "react-router";
import route from "./routes/Routes";
import { useTodoService } from "./useTodoService";
import '@ant-design/v5-patch-for-react-19';
import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});
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