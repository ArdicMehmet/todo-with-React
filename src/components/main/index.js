import { useEffect, useState } from "react";

function Main({ todos, setTodos, filter, setLeftTodoCount }) {
    const [status, setStatus] = useState(false);
    useEffect(() => {
        setLeftTodoCount(count);
        setStatus(todos.every(todo => todo.done));
    }, [todos])
    let count = 0;
    let filteredData = todos.filter((todo) => {
        if (!todo.done) {
            count++;
        }
        return !filter.status ? todo : todo.done === filter.active;
    });

    function changeChecked(e) {
        let currentId = parseInt(e.target.getAttribute('data-id'));
        let newTodos = todos.map(todo => {
            if (currentId === todo.id)
                todo.done = !todo.done
            return todo;
        })
        setTodos(newTodos);
    }
    function changeDelete(e) {
        let currentId = parseInt(e.target.getAttribute('data-id'));
        let newTodos = todos.filter(todo => !(currentId === todo.id));
        setTodos(newTodos);
    }

    function markAll() {
        setStatus(todos.every(todo => todo.done));
        let newTodos = status ? todos.map(todo => { todo.done = false; return todo; }) :
            todos.map(todo => { todo.done = true; return todo; });
        setTodos(newTodos);

    }
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" checked={status} />
                <label htmlFor="toggle-all" onClick={markAll} >
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {filteredData.map((data, index) =>
                        <li key={index} className={data.done ? "completed" : ""}>
                            <div className="view">
                                <input className="toggle" type="checkbox" data-id={data.id} checked={data.done} onChange={changeChecked} />
                                <label >{data.text}</label>
                                <button className="destroy" data-id={data.id} onClick={changeDelete}></button>
                            </div>
                        </li>)}
                </ul>
            </section>
        </>
    );
}

export default Main;
