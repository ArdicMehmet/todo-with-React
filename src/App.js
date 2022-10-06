import { useState } from 'react';
import './App.css';
import AddTodo from './components/addTodo';
import Filter from './components/filter';
import Main from './components/main';
import Footer from "./components/footer";
function App() {
  const initialFilter = { status: false, active: false };
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(initialFilter);
  const [leftTodoCount, setLeftTodoCount] = useState(0);
  const [idCount, setIdCount] = useState(0);
  return (
    <>
      <section className="todoapp">
        <AddTodo todos={todos} setTodos={setTodos} idCount={idCount} setIdCount={setIdCount} />
        <Main todos={todos} setTodos={setTodos} filter={filter} setLeftTodoCount={setLeftTodoCount} />
        <Filter setFilter={setFilter} todos={todos} setTodos={setTodos} leftTodoCount={leftTodoCount} />
      </section>
      <Footer />
    </>
  );
}

export default App;
