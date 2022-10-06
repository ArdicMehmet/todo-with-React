import { useState } from "react";

function Filter({ setFilter, todos, setTodos, leftTodoCount }) {
    const checkedInitial = { all: "", active: "", complated: "" };
    const [checked, setChecked] = useState({ ...checkedInitial, "all": "selected" });

    function changeFilter(e) {
        const initialFilter = { "status": false, "active": false };
        setChecked({ ...checkedInitial, [e.target.name]: "selected" })
        if (e.target.name === "all") {
            setFilter(initialFilter);
        }
        if (e.target.name === "active") {
            setFilter({ ...initialFilter, "status": true });
        }
        if (e.target.name === "complated") {
            setFilter({ ...initialFilter, "status": true, "active": true });
        }
    }
    function clearComplated() {
        setTodos(todos.filter((todo) => !todo.done));
    }

    return (
        <>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{leftTodoCount}</strong> items left

                </span>

                <ul className="filters">
                    <li>
                        <a href="#/" name="all" className={checked.all} onClick={changeFilter}>All</a>
                    </li>
                    <li>
                        <a href="#/" name="active" className={checked.active} onClick={changeFilter}>Active</a>
                    </li>
                    <li>
                        <a href="#/" name="complated" className={checked.complated} onClick={changeFilter}>Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={clearComplated}>
                    Clear completed
                </button>
            </footer>
        </>
    )
}
export default Filter;