import './TodoItem.scss'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <div className='TodoItem-wrapper'>
      <span className='TodoItem-check' onClick={onComplete}>
        {completed ? <AiOutlineCheckCircle /> : <RiCheckboxBlankCircleLine />}
      </span>
      <p className={`TodoItem-text ${completed && 'TodoItem-text--completed'}`}>
        {text}
      </p>
      <button className='TodoItem-remove' onClick={onDelete}>
        <IoClose />
      </button>
    </div>
  )
}

export default TodoItem
