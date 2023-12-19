import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-reactocine.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <Link className="menulogo" to="/">
        <img src={logo} alt="Reactocine Logo" />
      </Link>
      <h1>reactociné</h1>
      <div className="content-searh">
        <input type="text" className="search" placeholder="Rechercher un film" />
          <div>GO</div>
        </div>
    </div>
  );
};

export default Header;
