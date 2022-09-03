import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./Header/index";
import Stats from "./Stats/index";
import Footer from "./Footer/index";

const App = () => {
  return (
    <div id="container">
      <Header />
        <div id="wrapper">
          <Routes>
            <Route path = "/stats" element = { <Stats /> }/>
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
