import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useTodoService } from "../useTodoService";
import { Button} from 'antd';
function TodoItemGenerator() {
    const { dispatch, state } = useContext(TodoContext);
    const [input, setInput] = useState("");
    const { creatTodo } = useTodoService();
    function addTodo() {
        const text = input.trim();
        if (text) {
            creatTodo(text)
                .then((todo) => {
                    dispatch({ type: "ADD_TODO", payload: todo });
                });
            setInput("");
        }
    }
    return <div className={"todo-input"}>
        {state.length === 0 && <div className="todo-placeholder">Add the things you need to do today...</div>}
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        <Button type="primary" onClick={addTodo} className={"todo-button"}>add</Button>
    </div>;

}
export default TodoItemGenerator;