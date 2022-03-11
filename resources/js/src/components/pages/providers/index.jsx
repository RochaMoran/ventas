import React, { useState } from 'react';
import Dashboard from '../../dashboard/index'
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";
import Modal from "../../modal/index";
import Input from "../../input/index";
import Button from "../../button/index";
import { useModal } from "../../hooks/index"

export default function Providers() {
  const {show, toggleModal} = useModal()
  const [action, setAction] = useState("show")

  return (
    <Dashboard>
       <BarActions action={action} setAction={setAction} create={toggleModal} />
      <Table>
        <TableHead columns={["#", "ID", "NOMBRE"]}/>
      </Table>
      <Modal title="Crear Proveedor" show={show} toggleModal={toggleModal}>
        <form>
            <div className="form-input">
                <label>Nombre</label>
                <Input placeholder="Ingrese nombre proveedor" cls="modal-form__input" />
            </div>
            <div className="form-input">
                <label>Telefono</label>
                <Input placeholder="Ingrese telefono proveedor" cls="modal-form__input" />
            </div>
            <Button cls="btn-send" text="Enviar"/>
            <Button type="button" cls="btn-cancel" text="Cancelar" onClick={toggleModal}/>
        </form>
      </Modal>
    </Dashboard>
  )
}
