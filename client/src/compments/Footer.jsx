import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <h1>Footer</h1>
      <NavLink end to="/admin">
        Admin
      </NavLink>
    </div>
  );
}

export default Footer;
