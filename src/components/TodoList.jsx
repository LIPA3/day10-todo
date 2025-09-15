import TodoItemGenerator from "./TodoItemGenerator";
import TodoGroup from "./TodoGroup";
export default function TodoList() {
    return <div>
        <h2 className={"title"}>Todo List</h2>
        <TodoGroup />
        <TodoItemGenerator />
    </div>
}