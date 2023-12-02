import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src="assets/Logo.svg" alt="Little Lemon logo" className="logo" />
      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
