import "./NavBar.css";
import zapatillas from "../../assets/zapatillas.png";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return(
      <nav className="navegation">
        <img src={zapatillas} alt="logo"/>
        <ul className="list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Productos</a></li>
        </ul>
        <CartWidget/>
      </nav>
    )
}
