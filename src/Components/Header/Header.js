import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-reactocine.png";
import SearchMovies from "../../Containers/SearchMovies/SearchMovies";

const Header = () => {
  return (
    <div className="headerContainer">
      <Link className="menulogo" to="/">
        <img src={logo} alt="Reactocine Logo" />
      </Link>

      <h1>reactociné</h1>

      {/* inclusion SearchMovies */}
      <div content-searh>
        <SearchMovies  placeholder="Rechercher un film"
         />
      </div>
    </div>
  );
};

export default Header;
