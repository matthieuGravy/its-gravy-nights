import "./index.css";

import Nav from "./compments/Nav";
import Footer from "./compments/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}

export default App;
