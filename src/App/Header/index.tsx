import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="cata-shadow/" id="logo">
          <div></div>
          <h2>Shadow Priest</h2>
        </Link>
        <nav>
        </nav>
      </div>
    </header>
  )
}

export default Header;
