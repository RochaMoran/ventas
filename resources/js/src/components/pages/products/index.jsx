import React from 'react';
import Dashboard from '../../dashboard/index'
import BarActions from "../../barActions";
import Table from "../../table";
import TableHead from "../../tableHead";

export default function Products() {
  return (
    <Dashboard>
      <BarActions />
      <Table>
        <TableHead columns={["#", "ID", "PRECIO", "STOCK", "NOMBRE", "CATGORIA"]}/>
      </Table>
    </Dashboard>
  )
}
