import logo from '../logo.svg';
import '../styles/navbar.scss';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="container">
        <img src={logo} className="Logo" alt="on track logo" />
        <ul>
          <li>My Profile</li>
          <li>Accountability Pod</li>
          <li>Sign Out</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
