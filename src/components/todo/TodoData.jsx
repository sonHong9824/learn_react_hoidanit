
const TodoData = (props) => {
    console.log(">> props", props)

    const {name, age, data} = props

    return(
        <div className='todo-data'>
            <div>My name is {age}</div>
            <div>Learning React</div>
            <div>Watching React</div>
        </div>
    )
}
export default TodoData