
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../Pages/Home'
import Productos from '../Pages/Productos'
import Carro from '../Pages/Carro'
import Retiro from '../Pages/Retiro'
import ComprarTienda from '../Pages/ComprarTienda'
import ComprarDelivery from '../Pages/ComprarDelivery'
import Pago from '../Pages/Pago'
import PagoDelivery from '../Pages/PagoDelivery'
import DatosDelivery from '../Pages/DatosDelivery'

const Rutas = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='/home'/>} />
    <Route path="/home" element={<Home />} />
    <Route path="/productos" element={<Productos />} />
    <Route path="/carro" element={<Carro />} />
    <Route path="/retiro-delivery" element={<Retiro />} />
    <Route path="/comprar-tienda" element={<ComprarTienda />} />
    <Route path="/comprar-delivery" element={<ComprarDelivery />} />
    <Route path="/datos-delivery" element={<DatosDelivery />} />
    <Route path="/pago" element={<Pago />} />
    <Route path="/pago-delivery" element={<PagoDelivery />} />

   </Routes> 
}

export default Rutas