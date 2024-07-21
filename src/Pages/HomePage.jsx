import { useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Produtos from '../Components/Produtos/Produtos'
import Nav  from '../Components/Nav/Nav'

function HomePage() {
  return (
    <><Header></Header>
    <Nav></Nav>
      <Produtos/>
      <Footer></Footer>

    </>
  )
}

export default HomePage
