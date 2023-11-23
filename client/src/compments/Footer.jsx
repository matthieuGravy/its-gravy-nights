import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="h-20 flex items-center justify-center ">
      <NavLink end to="/admin" className="btn">
        Admin
      </NavLink>
    </section>
  );
}

export default Footer;
