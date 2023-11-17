import { NavLink } from "react-router-dom";

function BgHero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(src/assets/client-2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Discover It's Gravy Kitchens
            </h1>
            <p className="mb-5">
              An Enchanted Place Where World Flavors Unite to Create an
              Unforgettable Culinary Experience. Embark on a Culinary World Tour
              and Let Your Taste Buds Explore the Flavors of the Globe in Our
              Exquisite Restaurant, Where Every Dish Tells a Different Story of
              International Cuisine.
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
