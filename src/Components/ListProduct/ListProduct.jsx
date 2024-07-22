import "./ListProduct.css"
import Produtos from "../Produtos/Produtos"
function ListProduct () {
    return(
        <div className="listproduct">
            <div className="formCheckbox">
                <h3>Filtrar por</h3>
                <hr className="hrcheckbox" />

                <div className="formCheckbox01">
                    <h5>Marka</h5>
                    
                    <div>
                        <input type="checkbox" name="" id="" />
                    <   label htmlFor="">Adiddas</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">Calenciaga</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">K-Swiss</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">Nike</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">Puma</label>
                    </div>

                </div>

                <div className="formCheckbox01">
                    <h5>Categoria</h5>
                    
                    <div>
                        <input type="checkbox" name="" id="" />
                    <   label htmlFor="">Esporte e lazer</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">Casual</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">Utilitário</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">Corrida</label>
                    </div>


                </div>

                <div className="formCheckbox01">
                    <h5>Gênero</h5>
                    
                    <div>
                        <input type="checkbox" name="" id="" />
                    <   label htmlFor="">Masculino</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">Feminino</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">Unisex</label>
                    </div>

                </div>

                <div className="formCheckbox01">
                    <h5>Estado</h5>
                    
                    <div>
                        <input type="checkbox" name="" id="" />
                    <   label htmlFor="">Novo</label>
                    </div>

                    <div>
                        <input type="checkbox" />   
                        <label htmlFor="">Usado</label>
                    </div>

                   

                </div>

            </div>
            <Produtos/>
            
            

        </div>

    )
}
export default ListProduct