import "./index.css";

const menu: string[] = ["introduction", "talents", "rotation", "stats"]
const Header = () => {
  return (
    <header>
      <div id="logo">
        <img src="" />
        <h2>Shadow Priest</h2>
      </div>
      <nav>
        <ul>
        { menu.map((el:string) => (
          <a href="#">
            <li>
              { el }
            </li>
          </a>
        ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
