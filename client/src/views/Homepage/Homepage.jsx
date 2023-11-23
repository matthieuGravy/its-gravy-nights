import { BgHero } from "../../compments/BgHero";
import { Inscription } from "../../compments/Inscription";
import { Mission } from "../../compments/Mission";
import { Bestseller } from "../../compments/Bestseller";

function Homepage() {
  return (
    <>
      <main className="bg-base-200">
        <BgHero />
        <Mission />
        <Bestseller />
        <Inscription />
      </main>
    </>
  );
}

export default Homepage;
