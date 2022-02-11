import React from 'react';
import Dashboard from '../../dashboard/index'
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";
import Modal from "../../modal/index";
import Input from "../../input/index";
import Button from "../../button/index";
import { useModal, useMenuOption } from "../../hooks/index"

export default function Products() {
  const {show, toggleModal} = useModal()
  const {tab, toggleTab} = useMenuOption()

  return (
    <Dashboard>
      <BarActions create={toggleModal} />
      <Table>
        <TableHead columns={["#", "ID", "PRECIO", "STOCK", "NOMBRE", "CATGORIA"]}/>
      </Table>
      <Modal title="Crear Producto" show={show} toggleModal={toggleModal}>
        <div className='modal-bar'>
          <div className={tab === 0 ? 'modal-progress__bar' : 'modal-progress__bar-complete'}></div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          {
            tab === 0 ? (
              <>
                <div className="form-input">
                    <label>Nombre</label>
                    <Input placeholder="Ingrese su nombre" cls="modal-form__input"/>
                </div>
                <div className="form-input">
                    <label>Precio</label>
                    <Input placeholder="Ingrese su telefono" cls="modal-form__input" />
                </div>
                <div className="form-input">
                    <label>Cantidad</label>
                    <Input placeholder="Ingrese su cantidad" cls="modal-form__input" />
                </div>
                <button type="button" className="btn btn-send" onClick={() => toggleTab(1)}>
                  Siguiente
                </button>
                <button type="button" className="btn btn-cancel" onClick={() => toggleModal()}>
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <div className="form-input">
                  <label>Categoria</label>
                  <select className='table-header__select modal-create__select'>
                    <option>Categoria 1</option>
                    <option>Categoria 1</option>
                    <option>Categoria 1</option>
                  </select>
                </div>
                <div className="form-input">
                  <label>Marca</label>
                  <select className='table-header__select modal-create__select'>
                    <option>Categoria 1</option>
                    <option>Categoria 1</option>
                    <option>Categoria 1</option>
                  </select>
                </div>
                <div className="form-input">
                  <label>Proveedor</label>
                  <select className='table-header__select modal-create__select'>
                    <option>Categoria 1</option>
                    <option>Categoria 1</option>
                    <option>Categoria 1</option>
                  </select>
                </div>
                <Button type="submit" cls="btn-send" text="Enviar"/>
                <Button type="button" cls="btn-cancel" text="Atras" onClick={() => toggleTab(0)}/>
              </>
            )
          }
        </form>
      </Modal>
    </Dashboard>
  )
}
