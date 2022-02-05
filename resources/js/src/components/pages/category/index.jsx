import React from "react";
import Dashboard from "../../dashboard/index";
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";

export default function Category() {
    return (
        <Dashboard>
            <BarActions />
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
        </Dashboard>
    );
}
