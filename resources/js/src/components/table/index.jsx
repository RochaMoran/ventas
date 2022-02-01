import React from 'react';
import ControlInput from "../controlInput";

export default function Table() {
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
            <tr className='table-head'>
                <th>#</th>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>TELEFONO</th>
            </tr>
            <tr className='table-item'>
                <td>1</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>2</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>3</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>4</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>1</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>2</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>3</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>4</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>1</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>2</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>3</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>4</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>1</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>2</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>3</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
            <tr className='table-item'>
                <td>4</td>
                <td>43</td>
                <td>Maria Anders</td>
                <td>456465465456</td>
            </tr>
        </table>
    </div>
  )
}
