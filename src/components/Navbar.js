import { Link } from 'react-router-dom';

const Navbar = () => (

  <nav className="navbar">
    <span className="nav-logo">Bookstore CMS</span>
    <ul className="nav-list">
      <li>
        <Link to="/" className="nav-item books">
          {' '}
          Books
        </Link>
      </li>
      <li>
        <Link to="/catagories" className="nav-item categories">
          Categories
        </Link>
      </li>
    </ul>
  </nav>

);

export default Navbar;
