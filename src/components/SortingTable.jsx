import React from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table'
import { TbArrowsSort, TbSortAscending, TbSortDescending } from 'react-icons/tb'
import GlobalFilter from './GlobalFilter'
import { BsSearch, BsFilter, BsDownload } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';


const SortingTable = ({ columns, data }) => {

    const tableInstance = useTable({
        columns,
        data
    }, useFilters, useGlobalFilter, useSortBy, usePagination)

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
        state, 
        setGlobalFilter 
    } = tableInstance

    const { globalFilter } = state

    return (
        <>
            <div className='bg-white border-t border-l border-r h-12 flex rounded-t-md p-3'>
                <span className='ml-auto mr-3 pt-1 text-xl hover:cursor-pointer flex'>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
                <table {...getTableProps()} className='w-full bg-white rounded-lg'>
                    <thead className='text-left sticky top-0 bg-gray-200'>
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} className="h-12">
                                    {
                                        headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="py-2 px-4">
                                                <div className='flex'>
                                                    <span className=''>
                                                        {column.render('Header')}
                                                    </span>
                                                    <span className='ml-1 mt-auto mb-auto'>
                                                        {column.isSorted ? (column.isSortedDesc ? <TbSortDescending /> : <TbSortAscending />) : <TbArrowsSort />}
                                                    </span>
                                                </div>
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()} className="">
                        {
                            page.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()} className="bg-white border-b h-12 transition duration-100 ease-in-out hover:bg-gray-100">
                                        {
                                            row.cells.map(cell => {
                                                return <td {...cell.getCellProps} className="py-2 px-4 text-14 font-normal">
                                                {cell.render('Cell')}
                                                </td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <button onClick={() => previousPage()} disabled={!previousPage}>Previous</button>
                    <button onClick={() => nextPage()} disabled={!nextPage}>Next</button>
                </div>
            </div>
        </>
    )
}

export default SortingTable