import logo from "/src/assets/itsgravynight.svg";
import { NavLink, useMatch } from "react-router-dom";

export default function Nav() {
  {
    /* pour selection précise */
  }
  const match = useMatch("/menu");

  return (
    <header>
      {/*Barre de navigation  */}
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "bg-secondary" : "")}
                  end
                  to="/"
                >
                  Homepage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/offerings"
                  className={({ isActive }) => (isActive ? "bg-secondary" : "")}
                >
                  Offerings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/restaurant"
                  className={({ isActive }) => (isActive ? "bg-secondary" : "")}
                >
                  Restaurant
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "bg-secondary" : "")}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/picture"
                  className={({ isActive }) => (isActive ? "bg-secondary" : "")}
                >
                  Pictures
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <a className="">
            <img src={logo} alt="logo" className="h-12" />
          </a>
        </div>
      </div>
    </header>
  );
}
