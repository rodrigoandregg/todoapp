import { useContext } from 'react'
import './TodoCounter.scss'
import { TodoContext } from '../../TodoContext/TodoContext'

const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext)

  return (
    <h2 className='TodoCounter'>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  )
}

export default TodoCounter
