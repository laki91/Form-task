import React from 'react'

export default function Password({field, setValue}) {
  return (
    <div>
            <label
                className='lead me-2'
            >
                {field.label}
            </label>
            <input
                type={field.type}
                name={field.name}
                value={field.value}
                id={field.id}
                placeholder={field.placeholder}
                onChange={e => setValue(e.target.name, e.target.value)}
            /> <br /> <br />
    </div>
  )
}
