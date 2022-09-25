import "./NavBar.css";
import pngwing from "./assets/pngwing.com.png";

export const NavBar = () => {
    return(
      <nav className="navegation">
        <img className="logo" src={pngwing} alt="logo"/>
        <ul className="list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Productos</a></li>
        </ul>
        <img src="" alt="carritoCompras"/>
      </nav>
    )
}
