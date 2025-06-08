import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import Logo from './assets/react.svg'
import { useState } from 'react'

const App = () => {


  const [todoList, setTodoList] = useState([
    // {id: 1, name: "hoc react"},
    // {id: 2, name: "xem youtube"}
  ])

  const AddNewTodo = (name) => {
    // alert(`call me ${name}`) //backtick
    const newTodo = {
      id: randomIntFromInterval(1,100000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // AddNewTodo()

  return (
    <div className='container'>
      <div className="todo-title">Todo List</div>
      <TodoNew
        AddNewTodo = {AddNewTodo}
      />
      <TodoData
        todoList={todoList}
      />
      <div className='todo-logo'>
        <img src={Logo} alt="ReactLogo" className='logo'/>
      </div>
    </div>
  )
}

export default App
