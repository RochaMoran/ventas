import React from "react";
import Dashboard from "../../dashboard/index";
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";
import Modal from "../../modal/index";
import Input from "../../input/index";
import Button from "../../button/index";
import { useModal } from "../../hooks/index"

export default function Category() {
    const {show, toggleModal} = useModal()

    return (
        <Dashboard>
            <BarActions create={toggleModal} />
            <Table>
                <TableHead columns={["#", "ID", "NOMBRE"]} />
                <tbody>
                    <tr className="table-item">
                        <td>1</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                    </tr>
                    <tr className="table-item">
                        <td>1</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                    </tr>
                    <tr className="table-item">
                        <td>1</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                    </tr>
                    <tr className="table-item">
                        <td>1</td>
                        <td>43</td>
                        <td>Maria Anders</td>
                    </tr>
                </tbody>
            </Table>
            <Modal title="Crear Categoria" show={show} toggleModal={toggleModal}>
                <form>
                    <div className="form-input">
                        <label>Nombre</label>
                        <Input placeholder="Ingrese nombre categoria" cls="modal-form__input" />
                    </div>
                    <Button cls="btn-send" text="Enviar"/>
                    <Button type="button" cls="btn-cancel" text="Cancelar" onClick={toggleModal}/>
                </form>
            </Modal>
        </Dashboard>
    );
}
