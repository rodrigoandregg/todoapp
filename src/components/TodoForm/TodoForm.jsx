import { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext/TodoContext'
import './TodoForm.scss'

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('')
  const { toAddTodo, setOpenModal } = useContext(TodoContext)

  const onChange = e => {
    setNewTodoValue(e.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmit = e => {
    e.preventDefault()
    toAddTodo(newTodoValue)
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit} className='TodoForm'>
      <label htmlFor='' className='TodoForm-label'>
        Nuevo Todo
      </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        name=''
        id=''
        cols='30'
        rows='10'
        placeholder='Escribe tu nuevo ToDo'
        className='TodoForm-textarea'
      ></textarea>
      <div className='TodoForm-buttons'>
        <button
          className='TodoForm-btn TodoForm-btn--cancel'
          type='button'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className='TodoForm-btn TodoForm-btn--add' type='submit'>
          Añadir
        </button>
      </div>
    </form>
  )
}
