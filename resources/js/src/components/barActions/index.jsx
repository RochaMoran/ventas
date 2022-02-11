import React from 'react';
import { BiShow, BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

export default function BarActions({create}) {
  return (
    <div className='bar-actions'>
        <button className='button bar-actions__item'>
            <BiShow /> <span>Mostrar</span>
        </button>
        <button className='button bar-actions__item'>
            <BiEdit /> <span>Editar</span>
        </button>
        <button className='button bar-actions__item'>
            <RiDeleteBin6Line /> <span>Eliminar</span>
        </button>
        <button className='button bar-actions__item' onClick={() => create()}>
            <IoMdAddCircleOutline /> <span>Crear</span>
        </button>
    </div>
  )
}
