import React from 'react';
import { BiShow, BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

export default function BarActions({action, setAction, create}) {
    function actionValue (value) {
        if(action === value) return 'button bar-actions__item bar-action__item-active'
        else return 'button bar-actions__item'
    }

    function updateValue (value) {
        setAction(value)
        
        if(value === 'create'){
            create()
        }
    }

    return (
        <div className='bar-actions'>
            <button className={actionValue("show")} onClick={() => updateValue("show")}>
                <BiShow /> <span>Mostrar</span>
            </button>
            <button className={actionValue("update")} onClick={() => updateValue("update")}>
                <BiEdit /> <span>Editar</span>
            </button>
            <button className={actionValue("delete")} onClick={() => updateValue("delete")}>
                <RiDeleteBin6Line /> <span>Eliminar</span>
            </button>
            <button className={actionValue("create")} onClick={() => updateValue("create")}>
                <IoMdAddCircleOutline /> <span>Crear</span>
            </button>
        </div>
    )
}
