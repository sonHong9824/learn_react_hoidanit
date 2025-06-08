import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import Logo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    // {id: 1, name: "hoc react"},
    // {id: 2, name: "xem youtube"}
  ]);

  const AddNewTodo = (name) => {
    // alert(`call me ${name}`) //backtick
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name,
    };
    name.length > 0 && setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    const result = todoList.filter((item) => item.id !== id);
    setTodoList(result);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="container">
      <div className="todo-title">Todo List</div>
      <TodoNew AddNewTodo={AddNewTodo} />

      {todoList.length > 0 ? (
        <TodoData deleteTodo={deleteTodo} todoList={todoList} />
      ) : (
        <div className="todo-logo">
          <img src={Logo} alt="ReactLogo" className="logo" />
        </div>
      )}
    </div>
  );
};

export default App;
