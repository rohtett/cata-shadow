import "./index.css";

const menu: string[] = ["introduction", "talents", "rotation", "stats"]
const Header = () => {
  return (
    <header>
      <a id="logo" href="#">
        <div></div>
        <h2>Shadow Priest</h2>
      </a>
      <nav>
        <ul>
        { menu.map((el:string) => (
          <a key = { el } href="#">
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
