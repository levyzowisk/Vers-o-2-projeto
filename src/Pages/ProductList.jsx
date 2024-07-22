import Header from '../Components/Header/Header'
import Nav  from '../Components/Nav/Nav'
import Filtragem from '../Components/Filtragem/Filtragem'
import ListProduct from '../Components/ListProduct/ListProduct'
import Footer from '../Components/Footer/Footer'

function ProductList() {
    return(
        <>
            <Header></Header>
            <Nav></Nav>
            <Filtragem/>
            <ListProduct/>
            <Footer></Footer>
            
        </>
    )
}
export default ProductList