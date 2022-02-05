import React from 'react';
import Dashboard from '../../dashboard/index'
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";

export default function Providers() {
  return (
    <Dashboard>
      <BarActions />
      <Table>
        <TableHead columns={["#", "ID", "NOMBRE"]}/>
      </Table>
    </Dashboard>
  )
}
