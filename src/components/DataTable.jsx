import React, {useMemo, useState} from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import { TbArrowsSort, TbSortAscending, TbSortDescending } from 'react-icons/tb'
import GlobalFilter from './GlobalFilter'
import { BsDownload } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { MdArrowBackIos, MdArrowForwardIos, MdLastPage, MdFirstPage, MdEdit } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider';
import EditarEmpresa from '../components/empresas/EditarEmpresa';

const DataTable = ({ col, tableData, onRowClick }) => {
    // eslint-disable-next-line
    const columns = useMemo(() => col, [])
    const data = useMemo(() => [...tableData], [tableData])
    const { rowData } = useStateContext();
    const { setRowData } = useStateContext();
    const [showModalEditarEmpresa, setShowModalEditarEmpresa] = useState(false);

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page,
        nextPage,        
        previousPage, 
        prepareRow, 
        canPreviousPage,
        canNextPage,
        gotoPage,
        pageCount,
        setPageSize,
        pageOptions,
        state, 
        setGlobalFilter 
    } = useTable({
        columns,
        data
    }, useFilters, useGlobalFilter, useSortBy, usePagination, useRowSelect)

    const { pageIndex, pageSize } = state

    const { globalFilter } = state

    return (
        <>
            <div className='bg-white border-t border-l border-r h-12 flex rounded-t-md p-3'>
                <span className='ml-auto'>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </span>
                <span className='mr-3 pt-1 text-xl hover:cursor-pointer'>
                    <BiSearch />
                </span>
                <span className='border-1 mt-1'></span>
                <span className='ml-3 pt-0.5 text-xl hover:cursor-pointer'>
                    <BsDownload />
                </span>
            </div>
            <div className='h-fix overflow-auto border-x-1 border-t-1 '>
                <table {...getTableProps()} className='w-full bg-white rounded-lg'>
                    <thead className='text-left sticky top-0 bg-gray-200'>
                        {headerGroups.map((headerGroup) => {
                            const { key, ...restHeaderGroup } = headerGroup.getHeaderGroupProps();
                            return (
                                <>
                                    <tr {...restHeaderGroup} className="h-10 flex-auto">
                                        {headerGroup.headers.map((column) => {
                                            const {key, ...restColumn} = column.getHeaderProps(column.getSortByToggleProps());
                                            return (
                                                <>
                                                <th  {...restColumn} className="py-2 px-4">
                                                    <div className='flex'>
                                                        <span className=''>
                                                            {column.render('Header')}
                                                        </span>
                                                        <span className='ml-1 mt-auto mb-auto'>
                                                            {column.isSorted ? (column.isSortedDesc ? <TbSortDescending /> : <TbSortAscending />) : <TbArrowsSort />}
                                                        </span>
                                                    </div>
                                                </th>
                                                </>
                                            );
                                        }
                                    )}
                                        <th className='px-3'>Acción</th>
                                    </tr>
                                    <tr {...headerGroup.getHeaderGroupProps()} className="h-10">
                                        {headerGroup.headers.map(column => {
                                            const {key, ...restColumn} = column.getHeaderProps();
                                            return (
                                                <th {...restColumn} className="pl-4 pb-4">
                                                    <div className='w-fit pr-4'>
                                                        {column.canFilter ? column.render('Filter') : null}
                                                    </div>
                                                </th>
                                            )
                                        })}
                                        <th></th>
                                    </tr>

                                    
                                </>
                            )
                        }      
            )}
                    </thead>
                    <tbody {...getTableBodyProps()} className="h-full">
                        {
                            page.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()} onClick={() => {setRowData(row.original)}} className="group bg-white border-b h-12 transition duration-100 ease-in-out hover:bg-gray-100">
                                        {
                                            row.cells.map(cell => {
                                                return <td {...cell.getCellProps} className="py-2 px-4 text-14 font-normal">
                                                {cell.render('Cell')}
                                                </td>
                                            })
                                        }
                                        <td className='mx-6'>
                                        <MdEdit className='ml-6 text-2xl group-hover:cursor-pointer text-green-600' onClick={() => setShowModalEditarEmpresa(true)}/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className=' border-x-1 border-b-1 rounded-b-md h-14 flex bg-white'>
                <div className='ml-auto py-4 flex'>
                    <p className='hidden sm:block'>Filas por página</p>
                    <select name="" id="" className='ml-2 bg-white border rounded-sm' value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {
                            [10, 20, 30, 40, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className='hidden sm:block p-4'>
                    Página{' '}
                    {pageIndex + 1} de {pageOptions.length}
                </div>
                <div className='flex mr-4 pl-4'>
                    <button className='bg-white text-gray-500 rounded-full hover:bg-gray-200 hover:text-black my-3 w-8 mr-6' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        <MdFirstPage className='pl-1 text-2xl' />
                    </button>
                    <button className='bg-white text-gray-500 rounded-full hover:bg-gray-200 hover:text-black my-3 mr-6 w-8' onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <MdArrowBackIos className='ml-2'/>
                    </button>
                    <button className='bg-white text-gray-500 rounded-full hover:bg-gray-200 hover:text-black my-3 mr-6 w-8' onClick={() => nextPage()} disabled={!canNextPage}>
                        <MdArrowForwardIos className='ml-2'/>
                    </button>
                    <button className='bg-white text-gray-500 rounded-full hover:bg-gray-200 hover:text-black my-3 w-8' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        <MdLastPage className='pl-1 text-2xl' />
                    </button>
                </div>
            </div>
            <EditarEmpresa isVisible={showModalEditarEmpresa} onClose={() => setShowModalEditarEmpresa(false)} modalData={rowData} />
        </>
    )
}

export default DataTable