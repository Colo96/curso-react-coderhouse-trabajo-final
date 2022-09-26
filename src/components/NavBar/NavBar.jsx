import "./NavBar.css";
import zapatillas from "../../assets/zapatillas.png";
import carrito from "../../assets/anadir-al-carrito.png";

export const NavBar = () => {
    return(
      <nav className="navegation">
        <img className="logo" src={zapatillas} alt="logo"/>
        <ul className="list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Productos</a></li>
        </ul>
        <img src={carrito} alt="carritoCompras"/>
      </nav>
    )
}
