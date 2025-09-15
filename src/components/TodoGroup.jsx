import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

function TodoGroup() {
    const { state, dispatch } = useContext(TodoContext);
    
    return (<div>
        {
            state.map((item, index) => {
                return <div className={"todo-group"} key={item.id}>
                    <TodoItem todo={item} index={index}></TodoItem>
                </div>
            })
            
        }
    </div>);
}
export default TodoGroup;