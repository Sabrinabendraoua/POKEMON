import logo from "../images/logo-pokemon.png";
import { Link } from "react-router-dom";
import "../assets/Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo de Vinted" />
        </Link>
      </div>
      <div>
        <Link to="/Pokemons">
          <button>Pokemons</button>
        </Link>

        <Link to="/Types">
          <button>Types</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
