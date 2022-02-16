import React from 'react';
import Input from "../input/index";

export default function Table({children}) {
  return (
    <div className='table-component'>
        <div className='table-header'>
            <Input placeholder="Buscar elemento" cls="input-table" />
            <select className='table-header__select'>
                <option>Mayor compras</option>
                <option>Menor compras</option>
            </select>
        </div>
        <table className='table'>
            {children}
        </table>
    </div>
  )
}
