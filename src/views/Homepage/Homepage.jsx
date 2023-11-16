import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1 className="text-6xl pt-5 px-2">Discover It's Gravy Kitchens</h1>
      <article className="px-2 pt-5">
        <p>
          An Enchanted Place Where World Flavors Unite to Create an
          Unforgettable Culinary Experience. Embark on a Culinary World Tour and
          Let Your Taste Buds Explore the Flavors of the Globe in Our Exquisite
          Restaurant, Where Every Dish Tells a Different Story of International
          Cuisine.
        </p>
        <div>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </article>
    </>
  );
}

export default Homepage;
