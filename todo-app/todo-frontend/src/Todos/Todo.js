const Todo = ({ todo }) => {

  return (
    <li className='todo'>
      {todo.text}
      {todo.done}
    </li>
  )
}

export default Todo