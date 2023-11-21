import { liste, liste2, liste3 } from "/src/data/data.js";
import { BigTitle } from "../../compments/Bigtitle";
import { NormalTitle } from "../../compments/Normaltitle";
import { Navclient } from "../../compments/Navclient";

const ProductMenus = (props) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 pt-24">
      {props.list.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

const Product = ({ name, content, price, category, image, alt }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{content}</p>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline px-3 py-3">{price} €</div>
        </div>
      </div>
    </div>
  );
};

function Offerings() {
  const title1 = "Prestige Tables";
  const subtitle1 =
    "Choose from our three table options to enjoy the best view of the dance floor and ensure a lively evening. From discreet sophistication to total extravagance, our tables offer an ideal private space to share special moments with friends.";
  const title2 = "VIP Lounges with Private Show";
  const subtitle2 =
    "For those seeking an even more exclusive VIP experience, our VIP lounges offer a world apart. Enjoy private performances and personalized attention from dedicated hosts and hostesses.";
  const title3 = "Unique Experiences";
  const subtitle3 =
    "For those looking for something unusual and completely wild, discover our three unique experiences that defy the ordinary.";

  return (
    <div className="bg-base-200">
      <Navclient />
      <BigTitle
        title="Luxury Nights Await"
        subtitle="Elevate your nightlife experience with our exclusive offerings"
      ></BigTitle>

      <section className="py-20 flex flex-col gap-y-24 ">
        <article className="bg-base-300 container mx-auto pb-24 pt-16 rounded-lg px-1 ">
          <NormalTitle normalTitle={title1} normalSubtitle={subtitle1} />
          <ProductMenus list={liste} />
        </article>
        <article className="bg-base-300 container mx-auto pb-24 pt-16 rounded-lg px-1 ">
          <NormalTitle normalTitle={title2} normalSubtitle={subtitle2} />
          <ProductMenus list={liste2} />
        </article>
        <article className="bg-base-300 container mx-auto pb-24 pt-16 rounded-lg px-1 ">
          <NormalTitle normalTitle={title3} normalSubtitle={subtitle3} />
          <ProductMenus list={liste3} />
        </article>
      </section>
    </div>
  );
}

export default Offerings;
