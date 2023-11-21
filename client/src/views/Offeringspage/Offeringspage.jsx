import { liste, liste2, liste3 } from "/src/data/data.js";
import { BigTitle } from "../../compments/Bigtitle";
import { NormalTitle } from "../../compments/Normaltitle";

const ProductMenus = (props) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-8">
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
        <p>{price}€</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
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
    <div>
      <BigTitle
        title="Luxury Nights Await"
        subtitle="Elevate your nightlife experience with our exclusive offerings"
      />
      <section className="pt-20">
        <article className="bg-base-200 container mx-auto pb-5 pt-10 rounded-lg px-1 ">
          <NormalTitle normalTitle={title1} normalSubtitle={subtitle1} />
          <ProductMenus list={liste} />
        </article>
        <article className="">
          <NormalTitle normalTitle={title2} normalSubtitle={subtitle2} />
          <ProductMenus list={liste2} />
        </article>
        <NormalTitle normalTitle={title3} normalSubtitle={subtitle3} />
        <ProductMenus list={liste3} />
      </section>
    </div>
  );
}

export default Offerings;
