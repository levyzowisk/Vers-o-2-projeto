import Header from '../Components/Header/Header'
import Nav  from '../Components/Nav/Nav'
import Filtragem from '../Components/Filtragem/Filtragem'
import ListProduct from '../Components/ListProduct/ListProduct'

function ProductList() {
    return(
        <>
            <Header></Header>
            <Nav></Nav>
            <Filtragem/>
            <ListProduct/>
            
        </>
    )
}
export default ProductList