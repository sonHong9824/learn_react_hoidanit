import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoAdd from './components/todo/TodoNew'
import Logo from './assets/react.svg'

const App = () => {

  return (
    <div className='container'>
      <div className="todo-title">Todo List</div>
      <TodoAdd/>
      <TodoData/>
      <div className='todo-logo'>
        <img src={Logo} alt="ReactLogo" className='logo'/>
      </div>
    </div>
  )
}

export default App
