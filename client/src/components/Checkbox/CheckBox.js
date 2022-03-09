import React from 'react'

export default function CheckBox({field, setValue}) {
  return (
    <>
        <label 
          className='lead' 
          htmlFor={field.for}
        >
          {field.label}
        </label>
        <input 
            type={field.type}
            name={field.name}
            id={field.id}
            className='ms-2 me-4'
            onChange={e => setValue(e.target.name, e.target.checked)}
        /> <br /> <br />

    </>
  )
}
