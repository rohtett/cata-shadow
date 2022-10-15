import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import Header from "./Header/index";
import Introduction from "./Introduction/index";
import Talents from "./Talents/index";
import Rotation from "./Rotation/index";
import Stats from "./Stats/index";
import Consumables from "./Consumables/index";
import Footer from "./Footer/index";

const menu: string[][] = [["Introduction", "introduction"], ["Talents", "talents"], ["Rotation", "rotation"], ["Stats and Reforging", "stats"], ["Consumables and Glyphs", "consumables"]]

const App = () => {
  const [contents, setContents] = useState("introduction");
  const [menus, showMenus] = useState("none");
  const navigate = useNavigate();

  useEffect(() => {
    const article = document.querySelector("article") as HTMLInputElement;
    const click = () => {
      showMenus("none");
    }
    article.addEventListener("click", click);
    return () => article.removeEventListener("click", click);
  })

  return (
    <div id="container">
      <Header />
      <div id="wrapper">
        <Routes>
          <Route path = "/cata-shadow" element = { <Introduction /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/talents" element = { <Talents /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/rotation" element = { <Rotation /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/stats" element = { <Stats /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/consumables" element = { <Consumables /> }
            key = { document.location.href }
          />
          <Route path ="*" element = { <Landing /> }
            key = { document.location.href }
          />
        </Routes>
        <nav id = "modalMenu">
          <div id="modalIcon"
            onClick = {() => {
              setTimeout(() => {
                showMenus("block");
              }, 25);
            }}
          />
          <ul id="menuDisplay"
            style = {{ display: menus }}
          >
            <div>
              { menu.map((el:string[]) => (
                <li key = { el[1] } >
                    <input
                      name = "menu"
                      type = "radio"
                      value = { el[1] }
                      id = { el[1] }
                      checked = { contents === el[1] }
                      onChange = {() => {
                        setContents(el[1]);
                        (el[1] === "introduction") ?
                          navigate("../cata-shadow")
                         :
                          navigate("../cata-shadow/" + el[1]);
                        showMenus("none");
                      }}
                    />
                    <label htmlFor = { el[1] }>
                      { el[0] }
                    </label>
                </li>
              ))}
            </div>
          </ul>
        </nav>
        <nav id = "sideMenu">
          <ul>
            <div>
              { menu.map((el:string[]) => (
                <li key = { el[1] } >
                    <input
                      name = "menu"
                      type = "radio"
                      value = { el[1] }
                      id = { el[1] }
                      checked = { contents === el[1] }
                      onChange = {() => {
                        setContents(el[1]);
                        (el[1] === "introduction") ?
                          navigate("../cata-shadow")
                         :
                          navigate("../cata-shadow/" + el[1]);
                      }}
                    />
                    <label htmlFor = { el[1] }>
                      { el[0] }
                    </label>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </div>
      <Footer />
    </div>
  );
}

const Landing = () => {
  return (
    <article>
      <h3>Error 404: Page not Found</h3>
      <p> Please use the navigation bar to locate to another page.</p>
    </article>
  )
}

export default App;
