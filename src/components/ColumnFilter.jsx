import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table' 

const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    const [value, setValue] = useState(filterValue)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 400)

  return (
    <>
        {/* Search:{' '} */}
        <input className='w-full' value={value || ""} placeholder=" Filtrar..." onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
        }} />
    </>
  )
}

export default ColumnFilter