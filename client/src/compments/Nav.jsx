import logo from "../assets/itsgravy.svg";
import { NavLink, useMatch } from "react-router-dom";

export default function Nav() {
  const match = useMatch("/menu");
  console.log(match);
  return (
    <header>
      {/*Barre de navigation  */}
      <div className="navbar bg-base-100">
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
        <div className="navbar-center">
          <a className="">
            <img src={logo} alt="logo" className="h-12" />
          </a>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
}
