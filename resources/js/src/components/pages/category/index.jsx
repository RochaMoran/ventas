import React, { useState } from "react";
import Dashboard from "../../dashboard/index";
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";
import Modal from "../../modal/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from '../../../helpers/validates/models'
import Button from "../../button/index";
import { useModal, useData } from "../../hooks/index"
import MessageError from "../../messageError";

export default function Category() {
    const {show, toggleModal} = useModal()
    const [action, setAction] = useState("show")
    const { error, data, errorData, onSubmit } = useData('category/create', 'category/all')

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(categorySchema),
      });

    return (
        <Dashboard>
            <BarActions action={action} setAction={setAction} create={toggleModal} />
            <Table>
                <TableHead columns={["#", "ID", "NOMBRE"]} />
                <tbody>
                    {
                        errorData ? 
                        (
                            <MessageError error={errorData} /> 
                        ) 
                        : 
                        (
                            data ? data.map((item, i) => 
                                <tr className="table-item" key={item.id}>
                                    <td>{i}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name_category}</td>
                                </tr>
                            )
                             : <MessageError error="Cargando..." /> 
                        )
                    }
                </tbody>
            </Table>
            <Modal title="Crear Categoria" show={show} toggleModal={toggleModal}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-input">
                        <label>Nombre</label>
                        <div className='container-input'>
                            <input placeholder="Ingrese nombre categoria" className="input modal-form__input" {...register("name_category")} />
                        </div>
                    </div>
                    <MessageError error={errors?.name_category?.message || error && error} />
                    <Button cls="btn-send" text="Enviar"/>
                    <Button type="button" cls="btn-cancel" text="Cancelar" onClick={toggleModal}/>
                </form>
            </Modal>
        </Dashboard>
    );
}
