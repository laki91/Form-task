import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feedback from './pages/Feedback/Feedback'
import FormPage from './pages/FormPage/FormPage'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormPage />} />
        <Route path='/successful' element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  )
}
