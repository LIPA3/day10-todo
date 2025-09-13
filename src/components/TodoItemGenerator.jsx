import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
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
        {state.length === 0 && <div className="todo-placeholder">Add the things you need to do today...</div>}
        <input className={"todo-input"} type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={addTodo} className={"todo-button"}>add</button>
    </div>;
}
export default TodoItemGenerator;