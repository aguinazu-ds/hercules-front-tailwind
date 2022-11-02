import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import ColumnFilter from '../components/ColumnFilter';
import Empresa from '../api/services/Empresa';
import NuevaEmpresa from '../components/empresas/NuevaEmpresa';
import { useStateContext } from '../contexts/ContextProvider';

const Empresas = () => {
  const rutEmpresa = '76494210'

  const { rowData } = useStateContext();



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
        Cell: ({ value }) => {
           return value + ' Cell Test'
        },
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
  const [showModalNuevaEmpresa, setShowModalNuevaEmpresa] = useState(false);

  const fetchData = async () => {
    const response = await Empresa.getAll(rutEmpresa);
    setEmpresas(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-white  md:mt-12 mt-28 mx-6 rounded-xl pt-6 mb-12 pb-6'>
      <div className='pl-6 text-xl text-gray-500 font-normal'>
        Edición
      </div>
      <div className='text-4xl pt-1 pl-6 font-semibold'>
        Empresas
      </div>
      <div className='h-full rounded-lg mx-6 pt-5'>
        <DataTable col={COLUMNS} tableData={empresas} />
      </div>
      <div>
        <button onClick={() => setShowModalNuevaEmpresa(true)} className="mt-3 ml-6 bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          Nueva Empresa
        </button>
        <NuevaEmpresa isVisible={showModalNuevaEmpresa} onClose={() => setShowModalNuevaEmpresa(false)} modalData={rowData} />
      </div>
    </div>
    
      
  )
}

export default Empresas