import "./index.css";

import Nav from "./compments/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <h1 className="">Hello world!</h1>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
