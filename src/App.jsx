import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import Logo from './assets/react.svg'

const App = () => {

  const son = "Sonne"
  const age = 25
  const data = {
    address: "Tiền giang",
    country: "Việt nam",
    job: "student"
  }

  const AddNewTodo = (name) => {
    alert(`call me ${name}`) //backtick
  }
  // AddNewTodo()

  return (
    <div className='container'>
      <div className="todo-title">Todo List</div>
      <TodoNew
        AddNewTodo = {AddNewTodo}
      />
      <TodoData
        name = {son}
        age = {age}
        data = {data}
        
      />
      <div className='todo-logo'>
        <img src={Logo} alt="ReactLogo" className='logo'/>
      </div>
    </div>
  )
}

export default App
