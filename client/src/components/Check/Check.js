import React from 'react'

export default function Check({form, checkBoxMethod}) {
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
                            onChange={checkBoxMethod}
                        />
                    </>
                    :
                    null
            }
        </>
    )
}
