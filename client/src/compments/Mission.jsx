import { NavLink } from "react-router-dom";

const Mission = () => {
  return (
    <section className="bg-base-300">
      <article className="container mx-auto">
        <h3 className="text-6xl text-center px-2 pt-60 pb-20 ">
          Our mission is to provide the best service to our customers and to
          make sure they are satisfied with our work.
        </h3>
        <div className="flex justify-center pb-40">
          <NavLink to="/the-club" className="btn btn-secondary">
            About us
          </NavLink>
        </div>
      </article>
    </section>
  );
};

export { Mission };
