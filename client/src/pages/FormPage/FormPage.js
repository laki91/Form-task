import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { dataToDb } from '../../../src/services/services'
import Input from '../../components/Input/Input'
import Radio from '../../components/Radio/Radio'
import CheckBox from '../../components/Checkbox/CheckBox'
import Submit from '../../components/Submit/Submit'
import Date from '../../components/Date/Date'
import Password from '../../components/Password/Password'
import Email from '../../components/Email/Email'
import Number from '../../components/Number/Number'



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

    const setValue = (field, value) => {
        setNewForm({ ...newForm, [field]: value })
    }

    const renderFields = formData.map(field => {
        if (field.type === 'text') {
            return (
                <Input field={field} key={field._id} setValue={setValue} />
            )
        }
        else if (field.type === 'radio') {
            return (
                <Radio field={field} key={field._id} setValue={setValue} />
            )
        }
        else if (field.type === 'checkbox') {
            return (
                <CheckBox field={field} key={field._id} setValue={setValue} />
            )
        }
        else if (field.type === 'date') {
            return (
                <Date field={field} key={field._id} setValue={setValue} />
            )
        }
        else if (field.type === 'password') {
            return (
                <Password field={field} key={field._id} setValue={setValue} />
            )
        }
        else if (field.type === 'email') {
            return (
                <Email field={field} key={field._id} setValue={setValue} />
            )
        }
        else if (field.type === 'number') {
            return (
                <Number field={field} key={field._id} setValue={setValue} />
            )
        }
        else {
            return (
                <Submit field={field} key={field._id} />
            )
        }
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
                        {renderFields}
                    </form>
                </div>
            </div>
        </div>
    )
}
