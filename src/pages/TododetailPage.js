import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import TodoItem from "../components/TodoItem";
function TodoDetailPage(){
    const {id}=useParams();
    const { state, dispatch } = useContext(TodoContext);
    const todo=state.filter(item=>item.id===id);
    if(todo.length === 0) return <div>Todo not found</div>;
    function deleteTodo(id) {
        dispatch({
            type: 'DELETE_TODO',
            payload: { id }
        });
    }
    return <div>
        <TodoItem todo={todo[0]} index={id} showDetailButton={false} onDelete={deleteTodo}></TodoItem>
    </div>
}
export default TodoDetailPage;