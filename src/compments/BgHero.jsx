import { NavLink } from "react-router-dom";

function BgHero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(src/assets/pexels-aleksandar-pasaric-1820770.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">It's Gravy Nights</h1>
            <p className="mb-5">
              An Enthralling Haven Where Sizzling Vibes Converge to Ignite an
              Unforgettable Nightlife Experience. Immerse Yourself in the Heat
              of the Night and Let Your Senses Explore the Spicy Beats and Hot
              Flavors of Our Exquisite Afterwork Hotspot, Where Every Moment
              Tells a Different Tale of Fiery Entertainment
            </p>
            <NavLink to="/contact" className="btn btn-secondary  mx-2">
              Contact
            </NavLink>
            <NavLink to="/menu" className="btn mx-2">
              Menu
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export { BgHero };
