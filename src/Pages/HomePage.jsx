import { useState } from 'react'
import Header from '../Components/Header/Header'
import Nav  from '../Components/Nav/Nav'
import Colecao from '../Components/Colecao/Colecao'
import Produtos from '../Components/Produtos/Produtos'
import Oferta from '../Components/Oferta/Oferta'
import Footer from '../Components/Footer/Footer'
function HomePage() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Colecao></Colecao>
      <Produtos></Produtos>
      <Oferta></Oferta>
      <Footer></Footer>

    </>
  )
}

export default HomePage
