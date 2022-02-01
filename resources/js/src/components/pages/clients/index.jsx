import React from 'react';
import Dashboard from '../../dashboard/index'
import BarActions from '../../barActions';
import Table from '../../table';

export default function Clients() {
  return (
    <Dashboard>
        <BarActions />
        <Table />
    </Dashboard>
  )
}
