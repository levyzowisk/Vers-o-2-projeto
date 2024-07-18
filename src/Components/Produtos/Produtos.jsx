import Right from "../../assets/Right.png"
import './produtos.css'
function Produtos(){
    return(
        <>
        <section>
            <div className="sec01">
                <div className="sectionTitle">
                <h4>Produtos em alta</h4>
            </div>
            
            <div className="textIcon">
            <button> Ver todos </button>
            <img src={Right} alt="" />
            </div>
            </div>

            

        </section>
        </>
    )
}
export default Produtos