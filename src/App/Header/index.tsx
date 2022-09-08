import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" id="logo">
        <div></div>
        <h2>Shadow Priest</h2>
      </Link>
      <nav>
      </nav>
    </header>
  )
}

export default Header;
