import "./NavBar.css";

export const NavBar = () => {
    return(
      <nav className="navegation">
        <img className="logo" src={require("./assets/pngwing.com.png").default} alt="logo"/>
        <ul className="list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Productos</a></li>
        </ul>
        <img src="" alt="carritoCompras"/>
      </nav>
    )
}
