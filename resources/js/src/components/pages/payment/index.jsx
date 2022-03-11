import React, { useState } from "react";
import Dashboard from "../../dashboard/index";
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";
import Modal from "../../modal/index";
import Input from "../../input/index";
import Button from "../../button/index";
import { useModal } from "../../hooks/index"

export default function Payment() {
  const {show, toggleModal} = useModal()
  const [action, setAction] = useState("show")

  return (
    <Dashboard>
        <BarActions action={action} setAction={setAction} create={toggleModal} />
        <Table>
            <TableHead columns={["#", "ID", "NOMBRE"]} />
            <tbody>
                <tr className="table-item">
                    <td>1</td>
                    <td>1</td>
                    <td>Efectivo</td>
                </tr>
                <tr className="table-item">
                    <td>1</td>
                    <td>1</td>
                    <td>Credito</td>
                </tr>
                <tr className="table-item">
                    <td>1</td>
                    <td>1</td>
                    <td>Visa</td>
                </tr>
                <tr className="table-item">
                    <td>1</td>
                    <td>1</td>
                    <td>Wester Union</td>
                </tr>
            </tbody>
        </Table>
        <Modal title="Crear Tipo de pago" show={show} toggleModal={toggleModal}>
            <form>
                <div className="form-input">
                    <label>Nombre</label>
                    <Input
                        placeholder="Ingrese nombre pago"
                        cls="modal-form__input"
                    />
                </div>
                <Button cls="btn-send" text="Enviar" />
                <Button
                    type="button"
                    cls="btn-cancel"
                    text="Cancelar"
                    onClick={toggleModal}
                />
            </form>
        </Modal>
    </Dashboard>
  );
}
