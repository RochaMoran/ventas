import React from 'react';
import ControlInput from "../controlInput";

export default function Table({children}) {
  return (
    <div className='table-component'>
        <div className='table-header'>
            <ControlInput />
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
