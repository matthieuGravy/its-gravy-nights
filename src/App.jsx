import "./index.css";

import Nav from "./compments/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
