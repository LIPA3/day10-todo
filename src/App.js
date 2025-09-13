import {useReducer,useState} from "react";
import "./App.css"
import TodoGroup from "./components/TodoGroup";
import {todoReducer} from "./reduces/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {useContext} from "react";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];
// export const TodoContext = createContext()
//
// function TodoItem(props) {
//     const {state, dispatch} = useContext(TodoContext);
//
//     function makeAsDone() {
//         dispatch({
//             type: 'TUGGLE_TODO',
//             payload: {id: props.todo.id}
//         });
//     }
//
//     return <div className={"todo-item"}>
//     <span className={props.todo.done ? "todo-done" : ""}
//           onClick={makeAsDone}>
//       {props.todo.text}
//     </span>
//     </div>;
// }
//
// function TodoGroup() {
//     const {state, dispatch} = useContext(TodoContext);
//     return <div>
//         {
//             state.map((item, index) => {
//                 return <TodoItem todo={item} key={index} index={index}></TodoItem>
//             })
//         }
//     </div>;
// }
//
// export function todoReducer(state, action) {
//     switch (action.type) {
//         case "TUGGLE_TODO":
//             const newState = [...state];
//             console.log("1111",state,action)
//             const id = action.payload.id;
//             return newState.map((value) => {
//                 if (value.id === id) {
//                     return {
//                         id,
//                         text: value.text,
//                         done: !value.done,
//                     }
//                 }
//                 return value;
//             })
//         default:
//             return state;
//     }
// }
function TodoItemGenerator() {
    const { dispatch, state } = useContext(TodoContext);
    const [input, setInput] = useState("");
    function addTodo() {
        const text = input.trim();
        if (text) {
            // 生成唯一id
            const maxId = state.length > 0 ? Math.max(...state.map(item => item.id)) : 0;
            dispatch({
                type: "ADD_TODO",
                payload: {
                    id: maxId + 1,
                    text,
                    done: false
                }
            });
            setInput("");
        }
    }
    return <div>
        <div>Add the things you need to do today...</div>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={addTodo}>add</button>
    </div>;
}
function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div className="App">
            <h2 className={"title"}>Todo List</h2>
            <TodoContext.Provider value={{state, dispatch}}>
                <TodoGroup/>
                <TodoItemGenerator></TodoItemGenerator>
            </TodoContext.Provider>
        
        </div>
    );
}

export default App;