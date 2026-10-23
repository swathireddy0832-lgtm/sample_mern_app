
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          HR Management
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About Us</Link>
          <Link className="nav-link" to="/contact">Contact Us</Link>
          <Link className="nav-link" to="/services">Services</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
