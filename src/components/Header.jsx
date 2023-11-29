// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src="assets/Logo.svg" alt="Little Lemon logo" className="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
