const CardProduct = ({ name, content, price, category, image, alt }) => {
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

export { CardProduct };
