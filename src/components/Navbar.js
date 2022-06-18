import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Movies App</h1>
        </Link>

        <ul className="nav-list">
          <li>
            <Link to={"/"}>
              <p>Movies</p>
            </Link>
          </li>
          <li>
            <Link to={"/liked"}>
              <p>Liked Movies</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
