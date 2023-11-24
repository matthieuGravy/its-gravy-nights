import { BgHero } from "../../compments/BgHero";
import { Inscription } from "../../compments/Inscription";
import { Mission } from "../../compments/Mission";
import { Bestseller } from "../../compments/Bestseller";

function Homepage() {
  return (
    <>
      <main className="bg-base-200">
        <BgHero />
        <section className="flex flex-col gap-y-36">
          <Mission />
          <Bestseller />
          <Inscription />
        </section>
      </main>
    </>
  );
}

export default Homepage;
