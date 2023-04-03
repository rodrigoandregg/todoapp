import { createPortal } from 'react-dom'
import './Modal.scss'

export const Modal = ({ children }) => {
  return createPortal(
    <div className='Modal'>{children}</div>,
    document.getElementById('modal')
  )
}
