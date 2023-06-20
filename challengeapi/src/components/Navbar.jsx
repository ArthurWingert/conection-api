import { Link } from "react-router-dom";
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"}>Daily phrase </Link>
      </h2>
      <ul>
        <li>
        {/* <Link to={""}> Home</Link> */}
        </li>
        {/* <li>
        <Link to={"/"} className="new-btn"> Novo Post</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
