import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import UserDetails from '../pages/UserDetails.jsx'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/users' element={<UserDetails />}></Route>
    </Routes>
  )
}
