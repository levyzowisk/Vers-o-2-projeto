import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductList from '../Pages/ProductList'
import Login from '../Pages/Login'
import CriarLogin from '../Pages/CriarLogin'
function AppRoutes() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          
          <Route index path="/" element={<HomePage/>}/>
          <Route path='/produto' element={<ProductList/>}/>
          {/* <Route path='/Categorias' element={#}/> */}
          {/* <Route path='/Meus Pedidos' element={#}/> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/criarlogin' element={<CriarLogin/>}/>
          
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRoutes
