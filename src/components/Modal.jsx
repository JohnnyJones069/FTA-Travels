import React from 'react'

export const Modal = ({children}) => {
  return (
    <div id="modal" className='modal'>
        <div className="modalWindow">{children}</div>
    </div>
  )
}