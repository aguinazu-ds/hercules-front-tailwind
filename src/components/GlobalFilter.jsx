import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table' 

const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 400)

  return (
    <span className=''>
        {/* Search:{' '} */}
        <input className='appearance-none border-b-1 focus:outline-none mr-3 pl-1' value={value || ""} placeholder=" Buscar ..." onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
        }} />
    </span>
  )
}

export default GlobalFilter