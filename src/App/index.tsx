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


const App = () => {
  const [contents, setContents] = useState("introduction");
  const [menus, showMenus] = useState("none");
  const navigate = useNavigate();

  const menu: string[][] = [["Introduction", "introduction"], ["Talents", "talents"], ["Rotation", "rotation"], ["Stats and Reforging", "stats"], ["Consumables and Glyphs", "consumables"]]

  const [viewer, setViewer] = useState([{spell:{mana:null,range:null,cast:null,cooldown:null},info:[null,null,null],name:null,id:null},0]);
  //Mouse position tracker from:
  //https://codingbeautydev.com/blog/react-get-mouse-position/
  const [mousePos, setMousePos] = useState({x:0,y:0});
  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

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
          <Route path = "/cata-shadow" element = { <Introduction mousePos={mousePos} setViewer={setViewer} viewer={viewer} /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/talents" element = { <Talents mousePos={mousePos} setViewer={setViewer} viewer={viewer} /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/rotation" element = { <Rotation mousePos={mousePos} setViewer={setViewer} viewer={viewer} /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/stats" element = { <Stats mousePos={mousePos} setViewer={setViewer} viewer={viewer} /> }
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
