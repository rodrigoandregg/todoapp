// import { v4 as uuidv4 } from 'uuid'
import './App.scss'
import TodoCounter from './components/TodoCounter/TodoCounter'
import TodoSearch from './components/TodoSearch/TodoSearch'
import TodoList from './components/TodoList/TodoList'
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton'
import TodoItem from './components/TodoItem/TodoItem'
import { useContext } from 'react'
import { TodoContext } from './TodoContext/TodoContext'
import { Modal } from './components/Modal/Modal'
import { TodoForm } from './components/TodoForm/TodoForm'

const App = () => {
  const {
    loading,
    error,
    searchedTodos,
    toCompleteTodo,
    toDeleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext)

  return (
    <main className='Todo'>
      <div className='Todo-wrapper'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>hubo un error</p>}
          {loading && <p>estamos cargando, calmao</p>}
          {!loading && !searchedTodos.length && <p>crea tu primer ToDo!</p>}

          {searchedTodos.map(todo => (
            <li key={todo.id} className='TodoItem'>
              <TodoItem
                text={todo.text}
                completed={todo.completed}
                onComplete={() => toCompleteTodo(todo.text)}
                onDelete={() => toDeleteTodo(todo.text)}
              />
            </li>
          ))}
        </TodoList>

        <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </main>
  )
}

export default App
