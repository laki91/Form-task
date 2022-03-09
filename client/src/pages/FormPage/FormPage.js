import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { dataToDb } from '../../../src/services/services'
import Inputs from '../../components/Inputs/Inputs'



export default function FormPage() {

    const [formData, setFormData] = useState([])
    const [newForm, setNewForm] = useState({})

    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:5000/form')
            .then(res => {
                setFormData(res.data)
            })
    }, [])
 
    const inputsMethd = (e) => {

        if(e.target.type === 'checkbox'){
            setNewForm({ ...newForm, [e.target.name]: e.target.checked })
        }else{
            setNewForm({ ...newForm, [e.target.name]: e.target.value })
        }
    }


    const allInp = formData.map(form => {
        return (
            <Inputs form={form} key={form._id} inputsMethd={inputsMethd} />
        )
    })


    const submitHandler = (e) => {
        e.preventDefault()
        dataToDb(newForm)
        navigate('/successful')
    }

    return (
        <div className='container'>
            <h1 className='display-4 m-4'>Form</h1>
            <div className="row">
                <div className="col-8 offset-2">
                    <form onSubmit={submitHandler}>
                        {allInp}
                    </form> 
                </div>
            </div>
        </div>
    )
}
