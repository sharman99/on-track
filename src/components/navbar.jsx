import logo from '../logo.svg';
import '../styles/navbar.scss';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="container">
        <img src={logo} className="Logo" alt="on track logo" />
        <ul>
          <li><a>My Profile</a></li>
          <li><a>Accountability Pod</a></li>
          <li><a>Sign Out</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
