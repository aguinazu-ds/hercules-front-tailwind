import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table' 

const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    const [value, setValue] = useState(filterValue)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 400)

  return (
    <span className=''>
        {/* Search:{' '} */}
        <input className='appearance-none' value={value || ""} onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
        }} />
    </span>
  )
}

export default ColumnFilter