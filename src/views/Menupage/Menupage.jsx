import { liste, liste2, liste3 } from "/src/data/data.js";

const ProductMenus = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {props.list.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

const Product = ({ name, content, price, category, image, alt }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{content}</p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
};

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <section>
        <ProductMenus list={liste} />
        <ProductMenus list={liste2} />
        <ProductMenus list={liste3} />
      </section>
    </div>
  );
}

export default Menu;
