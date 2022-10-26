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

const menu: string[][] = [["Introduction", "introduction"], ["Talents", "talents"], ["Rotation", "rotation"], ["Stats and Reforging", "stats"], ["Consumables and Glyphs", "consumables"]]

const App = () => {
  const navigate = useNavigate();

  const [contents, setContents] = useState("introduction");
  const [viewer, setViewer] = useState({talent:{spell:{mana:null,range:null,cast:null,cooldown:null},info:[null,null,null],name:null,id:null},value:0});

  const [spec, setSpec] = useState<{main:any,off:any}>();

  //Mouse position tracker from:
  //https://codingbeautydev.com/blog/react-get-mouse-position/
  const [mousePos, setMousePos] = useState({x:0,y:0});
  const handleMouseMove = (event:any) => {
    const calcX = () => event.clientX+250>window.innerWidth? event.clientX+250-window.innerWidth:event.clientX;
    setMousePos({ x: calcX(), y: event.clientY+window.pageYOffset });
  }

  const [menus, showMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(()=> {
    document.addEventListener("click", ev => {
      if(ev.target !== document.querySelector("#menuDisplay")) {
        showMenu(false);
      }
    });
    return () => {
      document.removeEventListener("click", ev => {
        if(ev.target !== document.querySelector("#menuDisplay")) {
          showMenu(false);
        }
      })
    }
  },[menus])

  return (
    <div id="container">
      <Viewer mousePos={mousePos} viewer={viewer} />
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
                if (!menus) {
                  showMenu(true)
                  console.log("menu show")
                }
              }, 25);
            }}
          >
            <div className="hamburger-row"></div>
            <div className="hamburger-row"></div>
            <div className="hamburger-row"></div>
          </div>
          <ul id="menuDisplay" className={menus? "slide":""}
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
                      showMenu(false);
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
