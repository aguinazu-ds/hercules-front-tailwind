import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import ColumnFilter from '../components/ColumnFilter';
import Empresa from '../api/services/Empresa';

const Empresas = () => {
  const rutEmpresa = '76494210'

  const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Rut',
        accessor: 'rut',
        Filter: ColumnFilter
    },
    {
        Header: 'Razón Social',
        accessor: 'razonSocial',
        Filter: ColumnFilter
    },
    {
        Header: 'Giro',
        accessor: 'giro',
        Filter: ColumnFilter
    },
    {
        Header: 'Nombre Rpte. Legal',
        accessor: 'nombreRepresentanteLegal',
        Filter: ColumnFilter
    },
    {
        Header: 'Ap. Paterno Rpte. Legal',
        accessor: 'apellidoPatRepresentanteLegal',
        Filter: ColumnFilter
    },
    {
        Header: 'Ap. Materno Rpte. Legal',
        accessor: 'apellidoMatRepresentanteLegal',
        Filter: ColumnFilter
    },
  ]
  const [empresas, setEmpresas] = useState([]);

  const fetchData = async () => {
    const response = await Empresa.getAll(rutEmpresa);
    setEmpresas(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-white h-2/3 mt-12 mx-6 rounded-xl pt-6'>
      <div className='pl-6 text-xl text-gray-500 font-normal'>
        Edición
      </div>
      <div className='text-4xl pt-1 pl-6 font-semibold'>
        Empresas
      </div>
      <div className='h-fix rounded-lg mx-6 pt-5'>
        <DataTable col={COLUMNS} tableData={empresas} />
      </div>
    </div>
      
  )
}

export default Empresas