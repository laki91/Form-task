import React from 'react'

export default function Date({field, setValue}) {
  return (
    <div>
        <label
                htmlFor={field.for}
                className='lead me-2'
            >
                {field.label}
            </label>
            <input
                type={field.type}
                name={field.name}
                value={field.value}
                id={field.id}
                onChange={e => setValue(e.target.name, e.target.value)}
            /> <br /> <br />
    </div>
  )
}
