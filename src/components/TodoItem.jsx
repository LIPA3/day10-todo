import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

function TodoItem(props) {
    const {state, dispatch} = useContext(TodoContext);

    function makeAsDone() {
        dispatch({
            type: 'TUGGLE_TODO',
            payload: {id: props.todo.id}
        });
    }

    return <div className={"todo-item"}>
    <span className={props.todo.done ? "todo-done" : ""}
          onClick={makeAsDone}>
      {props.todo.text}
    </span>
    </div>;
}
export default TodoItem