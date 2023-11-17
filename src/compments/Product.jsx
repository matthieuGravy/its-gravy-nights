export default function Product(props) {
  const { name, content, price, category, image, alt } = props;
  {
    return (
      <>
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
      </>
    );
  }
}
