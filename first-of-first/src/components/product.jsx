
const Product = () => {
    const counter=112;
    return ( <>
    <span className="m-2 text-info">product name </span>
    <span className="m-2 badge bg-primary">{counter}</span>
    <button className="m-2 btn btn-sm btn-success">+</button>
    <button className="m-2 btn btn-sm btn-warning">-</button>
    <button className="m-2 btn btn-sm btn-danger">Delete</button>
    </> );
}
 
export default Product;