import React from 'react';
import DataTable from '../components/Datatable';
import DATA from '../data/MOCK_DATA.json';
import { BsSearch, BsFilter, BsDownload } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

const COLUMNS = [
  {
      Header: 'Id',
      accessor: 'id'
  },
  {
      Header: 'First Name',
      accessor: 'first_name'
  },
  {
      Header: 'Last Name',
      accessor: 'last_name'
  },
  {
      Header: 'Email',
      accessor: 'email'
  },
  {
      Header: 'Gender',
      accessor: 'gender'
  },
  {
      Header: 'IP Address',
      accessor: 'ip_address'
  }
]

const Empresas = () => {
  return (
    <div className='h-3/4 mt-12 rounded-lg p-12'>
      <div className='bg-white border-t border-l border-r h-12 flex rounded-t-md p-3'>
        <span className='ml-auto mr-3 pt-1 text-xl hover:cursor-pointer'>
          <BiSearch />
        </span>
        <span className='mr-3 pt-0.5 text-2xl hover:cursor-pointer'>
          <BsFilter />
        </span>
        <span className='border-1 mt-1'></span>
        <span className='ml-3 pt-0.5 text-xl hover:cursor-pointer'>
          <BsDownload />
        </span>
      </div>
      <div className='h-full overflow-auto border-1 rounded-b-md '>
        <DataTable columns={COLUMNS} data={DATA} />
      </div>

    </div>
   
  )
}

export default Empresas