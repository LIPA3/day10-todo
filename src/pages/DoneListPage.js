import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "../components/TodoItem";

export default function DoneListPage() {
    const { state } = useContext(TodoContext);
    const doneTodos = state.filter(item => item.done);
    return <div>
        <h2>Done List Page</h2>
        {doneTodos.length === 0 ? (
            <div>No completed todos.</div>
        ) : (
            doneTodos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} index={index} showDetailButton={true} />
            ))
        )}
    </div>;
}