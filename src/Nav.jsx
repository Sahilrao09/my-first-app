import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg avbar-light bg-light ">
      <ul className="navbar-nav me-auto b-2 mb-lg-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/GroupedTeamMembers">
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
