import { useContext } from "react";
import "./App.css";
import Welcome from "./component/Welcome";
import { GraContext } from "./context/AppContext";
import Main from "./component/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Finish from "./component/Finish";
import Edit from "./component/Edit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
  // return clicked === true ? <Main /> : <Welcome />;
}

export default App;
