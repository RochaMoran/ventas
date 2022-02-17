import React from 'react';
import Dashboard from '../../dashboard/index'
import BarActions from '../../barActions/index'
import Input from '../../input/index'
import Table from '../../table/index'
import TableHead from '../../tableHead/index'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'

export default function Facture() {
  return (
    <Dashboard main_cls="main-facture">
      <BarActions />
      <div className='facture'>
        <h2 className='facture-title'>Facturar</h2>
        <div className='facture-forms'>
          <div className='facture-forms__item facture-forms__client'>
            <h4 className='facture-item__title'>Datos cliente:</h4>
            <form className='facture-form'>
              <div className='form-input facture-form__controlinput'>
                <label className='facture-form__label'>Cliente: </label>
                <Input placeholder="Nombre cliente" cls="facture-form__input" />
              </div>
              <div className='form-input facture-form__controlinput'>
                <label className='facture-form__label'>Pago: </label>
                <select className='table-header__select facture-form__select'>
                  <option>option 1</option>
                  <option>option 1</option>
                  <option>option 1</option>
                </select>
              </div>
            </form>
            <div className='facture-other__options'>
              <button className='facture-option__button facture-options__search'>
                <BiSearch />
                <p>Buscar</p>
              </button>
              <button className='facture-option__button facture-options__new'>
                <IoMdAddCircleOutline />
                <p>Añadir</p>
              </button>
            </div>
          </div>
          <div className='facture-forms__item facture-form__date'>
            <h4 className='facture-item__title'>Datos basicos: </h4>
            <form className='facture-form'>
              <div className='form-input facture-form__controlinput'>
                <label className='facture-form__label'>Fecha: </label>
                <Input placeholder="Fecha actual" cls="facture-form__input" />
              </div>
            </form>
            <div className='facture-other__options'>
              <p className='facture-number'>N° Factura: <span>454545</span></p>
            </div>
          </div>
        </div>
        <Table>
          <TableHead columns={["Codigo", "Producto", "Marca", "Cant", "P. Unit", "Subtotal", "Eliminar"]}/>
        </Table>
        <div className='facture-forms facture-footer'>
          <div className='facture-forms__item facture-footer__buttons'>
            <button className='button facture-footer__button facture-button__cancel'>
              Cancelar Factura
            </button>
            <button className='button facture-footer__button facture-button_finish'>
              Terminar Factura
            </button>
          </div>
          <div className='facture-forms__item facture-form__date'>
            <div className='facture-footer__subtotal'>
              <p className='facture-subtotal'>Subtotal: <span>C$ 3500</span></p>
              <p className='facture-discount'> <label>Descuento:</label> <input className="input facture-descount__input" placeholder='Ingrese %'/></p>
            </div>
            <p className='facture-total'>Total: <span>C$ 3500</span></p>
          </div>
        </div>
      </div>
    </Dashboard>
  )
}
