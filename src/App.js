import {useReducer} from "react";
import "./App.css"
import TodoGroup from "./components/TodoGroup";
import {todoReducer} from "./reduces/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import TodoItemGenerator from "./components/TodoItemGenerator";

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
                <TodoGroup/>
                <TodoItemGenerator/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;