import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Header from "./Header/index";
import Introduction from "./Introduction/index";
import Talents from "./Talents/index";
import Rotation from "./Rotation/index";
import Stats from "./Stats/index";
import Footer from "./Footer/index";

const menu: string[][] = [["Introduction", "introduction"], ["Talents and Glyphs", "talents"], ["Rotation", "rotation"], ["Stats and Reforging", "stats"]]

const App = () => {
  const [contents, setContents] = useState("introduction");
  const navigate = useNavigate();

  return (
    <div id="container">
      <Header />
      <div id="wrapper">
        <Routes>
          <Route path = "/" element = { <Introduction /> } />
          <Route path = "/talents" element = { <Talents /> } />
          <Route path = "/rotation" element = { <Rotation /> } />
          <Route path = "/stats" element = { <Stats /> } />
        </Routes>
        <nav>
          <ul>
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
                    if (el[1] === "introduction") {
                      navigate("../");
                    } else {
                      navigate("../" + el[1]);
                    }
                  }}
                />
                <label htmlFor = { el[1] }>
                  { el[0] }
                </label>
            </li>
          ))}
          </ul>
        </nav>
      </div>
      <Footer />
    </div>
  );
}

export default App;
