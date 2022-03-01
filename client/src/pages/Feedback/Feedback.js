import React from 'react'
import { Link } from 'react-router-dom'

export default function Feedback() {

    return (
        <div className='container'>
            <h1 className='display-4 m-4'>Successful</h1>
            <Link to={'/'}> <button className='btn btn-warning m-4'>Back</button></Link>
        </div>
    )
} 
 