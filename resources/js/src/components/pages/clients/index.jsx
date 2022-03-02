import React, { useState } from "react";
import Dashboard from "../../dashboard/index";
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";
import Modal from "../../modal/index";
import Input from "../../input/index";
import Button from "../../button/index";
import { useModal } from "../../hooks/index"

export default function Clients() {
    const {show, toggleModal} = useModal()
    const [action, setAction] = useState("show")

    return (
        <Dashboard>
            <BarActions action={action} setAction={setAction} create={toggleModal} />
            <Table>
                <TableHead columns={["#", "ID", "TELEFONO", "NOMBRE"]} />
                <tbody>
                    <tr className="table-item">
                        <td>1</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>2</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>3</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>4</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>1</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>2</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>3</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>4</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>1</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>2</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>3</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>4</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>1</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>2</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>3</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                    <tr className="table-item">
                        <td>4</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                        <td>456465465456</td>
                    </tr>
                </tbody>
            </Table>
            <Modal title="Crear Cliente" show={show} toggleModal={toggleModal}>
                <form>
                    <div className="form-input">
                        <label>Nombre</label>
                        <Input placeholder="Ingrese su nombre" cls="modal-form__input" />
                    </div>
                    <div className="form-input">
                        <label>Telefono</label>
                        <Input placeholder="Ingrese su telefono" cls="modal-form__input" />
                    </div>
                    <Button cls="btn-send" text="Enviar"/>
                    <Button cls="btn-cancel" text="Cancelar"/>
                </form>
            </Modal>
        </Dashboard>
    );
}
