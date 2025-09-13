import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

function TodoGroup() {
    const { state, dispatch } = useContext(TodoContext);

    function deleteTodo(id) {
        dispatch({
            type: 'DELETE_TODO',
            payload: { id }
        });
    }

    return (<div>
        {
            state.map((item, index) => {
                return <div className={"todo-group"} key={item.id}>
                    <TodoItem todo={item} index={index}></TodoItem>
                    <button className={"to-delete"} onClick={() => deleteTodo(item.id)}>X</button>
                    
                </div>
            })
            
        }
    </div>);
}
export default TodoGroup;