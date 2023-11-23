import { liste, liste2, liste3 } from "../data/data.js";
import { CardProduct } from "./CardProduct";
import { NormalTitle } from "./Normaltitle.jsx";

const Bestseller = () => {
  const dernierElement = liste[liste.length - 1];
  const deuxiemeElement = liste2[1];
  const premierElement = liste3[0];
  return (
    <section className="bg-base-300 container mx-auto pb-24 pt-16 rounded-lg px-1 ">
      <NormalTitle normalTitle="Our crime is to satisfy you" />
      <article className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 pt-24">
        <CardProduct
          name={dernierElement.name}
          content={dernierElement.content}
          price={dernierElement.price}
          category={dernierElement.category}
          image={dernierElement.image}
          alt={dernierElement.alt}
        />
        <CardProduct
          name={premierElement.name}
          content={premierElement.content}
          price={premierElement.price}
          category={premierElement.category}
          image={premierElement.image}
          alt={premierElement.alt}
        />
        <CardProduct
          name={deuxiemeElement.name}
          content={deuxiemeElement.content}
          price={deuxiemeElement.price}
          category={deuxiemeElement.category}
          image={deuxiemeElement.image}
          alt={deuxiemeElement.alt}
        />
      </article>
    </section>
  );
};

export { Bestseller };
