import React from "react";
import Dashboard from "../../dashboard/index";
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";

export default function Clients() {
    return (
        <Dashboard>
            <BarActions />
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
        </Dashboard>
    );
}
