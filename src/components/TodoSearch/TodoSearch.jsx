import { useContext } from 'react'
import './TodoSearch.scss'
import { TodoContext } from '../../TodoContext/TodoContext'

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchValueChange = e => {
    setSearchValue(e.target.value)
  }

  return (
    <form className='TodoSearch'>
      <input
        onChange={onSearchValueChange}
        type='text'
        placeholder='Search ToDo'
        value={searchValue}
        className='TodoSearch-input'
      />
      <p className='TodoSearch-p'>{searchValue}</p>
    </form>
  )
}

export default TodoSearch
