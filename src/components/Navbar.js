import './styles/navbar.css';
import { Link } from 'react-router-dom';
import user from './user.png';

const Navbar = () => (

  <header className="header">
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
    <span>
      <Link to="/" className="nav-profile">
        <img src={user} alt="hi" className="user-img" />
      </Link>
    </span>
  </header>

);

export default Navbar;
