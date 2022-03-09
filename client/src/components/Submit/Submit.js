import React from 'react'

export default function Submit({ field }) {
    return (
        <div>
            <input
                type={field.type}
                name={field.name}
                value={field.value}

            />
        </div>
    )
}
