import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Customer from './pages/Customer'
import Admin from './pages/Admin'
import SuperAdmin from './pages/SuperAdmin'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/superadmin' element={<SuperAdmin />} />
    </Routes>
  )
}

export default Router