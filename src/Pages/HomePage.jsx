import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Produtos from '../Components/Produtos/Produtos'
import Card from '../Components/Card/Card'

function HomePage() {
  let produtos = [
    {
      nome:"Tenis",
      descricao:"Tenis legal",
      valor:300
    },
    {
      nome:"Tenis",
      descricao:"Tenis legal",
      valor:300,
      discount:true
    },
    {
      nome:"Tenis",
      descricao:"Tenis legal",
      valor:300
    },
    {
      nome:"Tenis",
      descricao:"Tenis legal",
      valor:300
    }]
  return (
    <>
      <Produtos/>
      
      <div >
      {
          produtos.map((produto,index) => (
            <Card 
              key={index}
              nome={produto.nome}
              descricao={produto.descricao}
              valor={produto.valor}
            />
          ))
        }
      </div>

      <Footer></Footer>

    </>
  )
}

export default HomePage
