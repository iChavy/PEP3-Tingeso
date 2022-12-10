
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../Pages/Home'
import Productos from '../Pages/Productos'
import Comprar from '../Pages/Comprar'
import Carro from '../Pages/Carro'

const Rutas = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='/home'/>} />
    <Route path="/home" element={<Home />} />
    <Route path="/productos" element={<Productos />} />
    <Route path="/comprar" element={<Comprar />} />
    <Route path="/carro" element={<Carro />} />
   </Routes> 
}

export default Rutas