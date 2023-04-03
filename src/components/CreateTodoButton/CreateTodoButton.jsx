import './CreateTodoButton.scss'
import { BiPlus } from 'react-icons/bi'

const CreateTodoButton = ({ openModal, setOpenModal }) => {
  const onClickButton = () => {
    setOpenModal(prevState => !prevState)
  }

  return (
    <button className='CreateTodoButton' onClick={onClickButton}>
      <BiPlus />
    </button>
  )
}

export default CreateTodoButton
