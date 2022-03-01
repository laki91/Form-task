import React from 'react'

export default function Inputs({ form, inputsMethd }) {
    return (
        <>
            {
                form.type === 'checkbox'
                    ?
                    null
                    :
                    <>
                        <label 
                            htmlFor={form.for} 
                            className='lead me-2' 
                        >
                            {form.label}
                        </label>
                        <input
                            type={form.type}
                            name={form.name}
                            value={form.value}
                            id={form.id}
                            placeholder={form.placeholder}
                            onChange={inputsMethd}
                        /> <br /> <br />
                    </>
            }
        </>
    )
}
