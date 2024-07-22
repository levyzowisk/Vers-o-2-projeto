import "./ListProduct.css"
import Produtos from "../Produtos/Produtos"
function ListProduct () {
    return(
        <div className="listproduct">
            <div className="formCheckbox">
                <h5>Filtrar por</h5>

                <hr />
            </div>
            <Produtos/>
        </div>
    )
}
export default ListProduct