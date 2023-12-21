import "./nav.css";

const Nav = (props) => {
    const navArr = props.nav

  return (

    <div className="nav">
      <h2>{navArr.original_title}</h2>
      <div className="nav-links">
        <a href="#fiche">Fiche</a>
          <a href="#casting">Casting</a>
          <a href="#similar">Films similaires</a>
      </div>
    </div>
  );
};

export default Nav;
