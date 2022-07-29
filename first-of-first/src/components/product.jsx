import "./product.css";

const Product = () => {
  const counter = 0;
  const imageUrl = "https://picsum.photos/300";
  return (
    <>
      <span className="m-2 text-info">product name </span>
      <span className="m-2 badge bg-primary">
        {counter == 0 ? "zerp" : counter}
      </span>
      <button className="m-2 btn btn-sm btn-success">+</button>
      <button className="m-2 btn btn-sm btn-warning">-</button>
      <button className="m-2 btn btn-sm btn-danger">Delete</button>
      <img src={imageUrl} className="product-image" alt="" />
    </>
  );
};

export default Product;
