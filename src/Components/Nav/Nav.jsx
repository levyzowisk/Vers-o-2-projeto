import { Link } from "react-router-dom";
import './nav.css'

function Nav() {
    return (
        <>
            <section id="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/" >Produto</Link></li>
                <li><Link to="/" >Categorias</Link></li>
                <li><Link to="/" >Meus Pedidos</Link></li>
            </section>
        </>
    )
}

export default Nav