import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Produtos from '../Components/Produtos/Produtos'
import Nav  from '../Components/Nav/Nav'
import Header from '../Components/Header/Header'
import Oferta from '../Components/Oferta/Oferta'

function HomePage() {
  return (
      <>
      
      <Header></Header>
      <Nav></Nav>
      <Produtos/>
      <Oferta></Oferta>
      <Footer></Footer>

    </>
  )
}

export default HomePage
