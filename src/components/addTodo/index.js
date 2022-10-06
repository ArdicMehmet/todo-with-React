import { useState, useEffect } from "react";

function AddTodo({ todos, setTodos, idCount, setIdCount }) {
    const initialTodoItem = { text: "", done: false };
    const [todoItem, setTodoItem] = useState(initialTodoItem);
    useEffect(() => {
        setTodoItem(initialTodoItem);
        console.log(todos);
    }, [todos])

    function changeTodo(e) {
        setTodoItem({ id: idCount, ...todoItem, [e.target.name]: e.target.value, })
    }
    function addTodo(e) {
        e.preventDefault();
        if (todoItem.text !== "") {
            setTodos([...todos, todoItem]);
            setIdCount(idCount + 1);
        }

    }
    return (
        <>
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={addTodo}>
                    <input name="text" className="new-todo" value={todoItem.text} onChange={changeTodo} placeholder="What needs to be done?" autoFocus />
                </form>
            </header>
        </>
    );
}

export default AddTodo;
