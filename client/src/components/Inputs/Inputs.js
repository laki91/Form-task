import React from 'react'

export default function Inputs({ form, inputsMethd }) {
    return (
        <>
            {
                form.type === 'checkbox'
                    ?
                    <>
                        <label
                            htmlFor={form.for}
                            className='lead' 
                        >
                            {form.label}
                        </label>
                        <input
                            type={form.type}
                            name={form.name}
                            id={form.id}
                            className='ms-2 me-4'
                            onChange={inputsMethd}
                        />
                    </>
                    :
                    <div>
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
                    </div>
            }
        </>
    )
}
