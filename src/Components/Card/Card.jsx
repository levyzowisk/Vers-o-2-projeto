import Tenis from "../../assets/Tenis.png"

function Card(props) {
    return(
        <div className="cardContainer">
            <div className="back_image">
                <img src={Tenis} alt="" />
            </div>
            
            <h5>{props.nome}</h5>
            <p>{props.descricao}</p>
            <p>{props.valor}</p>
                
        </div>
    )
}
export default Card