import React from 'react'
import { MdClose } from 'react-icons/md'

export default function Modal({title, show, toggleModal, children}) {
  return (
      <div className={show ? 'show' : 'not-show'}>
        <div className="my-modal">
            <button className='my-modal__close' onClick={() => toggleModal()}>
                <MdClose />
            </button>
            <h3 className="modal-title">{title}</h3>
            {children}
        </div>
        <div className='my-modal__background' onClick={() => toggleModal()}></div>
      </div>
  )
}
