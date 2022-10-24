import React from 'react'
import { useTable } from 'react-table'


const DataTable = ({ columns, data }) => {

    const tableInstance = useTable({
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
      <table {...getTableProps()} className='w-full bg-white rounded-lg'>
            <thead className='text-left sticky top-0 bg-gray-200'>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className="h-12">
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps} className="py-2 px-4">{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()} className="">
                {
                    rows.map(row => {
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
    )
}

export default DataTable