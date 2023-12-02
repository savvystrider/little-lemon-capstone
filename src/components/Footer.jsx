import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul className="navigation">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <ul className="contact">
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">Phone Number</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
        <ul className="social-media">
          <li>
            <a href="#"></a>
            <AiFillFacebook />
          </li>
          <li>
            <a href="#">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillTwitterCircle />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
