import React, { useMemo } from 'react';
import DataTable from '../components/Datatable';
import DATA from '../data/MOCK_DATA.json';
import SortingTable from '../components/SortingTable';
import ColumnFilter from '../components/ColumnFilter'

const COLUMNS = [
  {
      Header: 'Id',
      accessor: 'id',
      Filter: ColumnFilter
  },
  {
      Header: 'First Name',
      accessor: 'first_name',
      Filter: ColumnFilter
  },
  {
      Header: 'Last Name',
      accessor: 'last_name',
      Filter: ColumnFilter
  },
  {
      Header: 'Email',
      accessor: 'email',
      Filter: ColumnFilter
  },
  {
      Header: 'Gender',
      accessor: 'gender',
      Filter: ColumnFilter
  },
  {
      Header: 'IP Address',
      accessor: 'ip_address',
      Filter: ColumnFilter
  }
]

const Empresas = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => DATA, [])

  return (
    <div className='h-3/4 mt-12 rounded-lg p-12'>
      <SortingTable columns={columns} data={data} />
    </div>
   
  )
}

export default Empresas