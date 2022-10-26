import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import "./styles.scss";

import Header from "./Header/index";
import Introduction from "./Introduction/index";
import Talents from "./Talents/index";
import Rotation from "./Rotation/index";
import Stats from "./Stats/index";
import Consumables from "./Consumables/index";
import Footer from "./Footer/index";
import Viewer from "./Viewer";

const App = () => {
  const [contents, setContents] = useState("introduction");
  const [menus, showMenus] = useState("none");
  const navigate = useNavigate();

  const menu: string[][] = [["Introduction", "introduction"], ["Talents", "talents"], ["Rotation", "rotation"], ["Stats and Reforging", "stats"], ["Consumables and Glyphs", "consumables"]]

  const [viewer, setViewer] = useState({talent:{spell:{mana:null,range:null,cast:null,cooldown:null},info:[null,null,null],name:null,id:null},value:0});
  //Mouse position tracker from:
  //https://codingbeautydev.com/blog/react-get-mouse-position/
  const [mousePos, setMousePos] = useState({x:0,y:0});
  const [scrollPosition,setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

const [spec, setSpec] = useState<{main:any,off:any}>();

useEffect(() => {
  if (!spec) {
    const fetchTalentInfo = async() => {
      const mainSpec = collection(db, "talent-shadow");
      const offSpec = collection(db, "talent-discipline");
      const offoffSpec= collection(db, "talent-holy");
      const main = await getDocs(mainSpec);
      const off = await getDocs(offSpec);
      const offOff = await getDocs(offoffSpec);
      setSpec({main:main.docs.map((doc:any) =>({...doc.data(), id:doc.id})), off:[off.docs.map((doc:any) =>({...doc.data(), id:doc.id})), offOff.docs.map((doc:any) =>({...doc.data(), id:doc.id}))]});
      console.log("fetched server");
    }
    fetchTalentInfo();
  }
},);
  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  useEffect(() => {
    document.querySelector("#modalIcon")!.addEventListener("click", () => {
      document.addEventListener("click", click);
      if (menus == "none") {
        showMenus("block")
      }
    })
    const click = (ev:any) => {
      if(ev.target != document.querySelector("#menuDisplay")) {
        showMenus("none");
      }
    }
    return () => document.removeEventListener("click", click);
  })

  return (
    <div id="container">
      <Viewer mousePos={mousePos} scrollPosition= {scrollPosition} viewer={viewer} />
      <Header />
      <div id="wrapper">
        <Routes>
          <Route path = "/cata-shadow" element = { <Introduction mousePos={mousePos} setViewer={setViewer} viewer={viewer} spec={spec} /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/talents" element = { <Talents mousePos={mousePos} setViewer={setViewer} viewer={viewer} spec={spec} /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/rotation" element = { <Rotation mousePos={mousePos} setViewer={setViewer} viewer={viewer} spec={spec} /> }
            key = { document.location.href }
          />
          <Route path = "/cata-shadow/stats" element = { <Stats mousePos={mousePos} setViewer={setViewer} viewer={viewer} spec={spec} /> }
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
          >
            <div className="hamburger-row"></div>
            <div className="hamburger-row"></div>
            <div className="hamburger-row"></div>
          </div>
          <ul id="menuDisplay"
            style = {{ display: menus }}
          >
            <div>
              { menu.map((el:string[]) => (
                <li key = { el[1] } >
                    <input
                      className="menu"
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
                      className="menu"
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
