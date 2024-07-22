import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductList from '../Pages/ProductList'
function AppRoutes() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route>
          <Route index path="/" element={<HomePage/>}/>
          <Route path='/Produto' element={<ProductList/>}/>
          {/* <Route path='/Categorias' element={#}/> */}
          {/* <Route path='/Meus Pedidos' element={#}/> */}
          </Route>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRoutes
