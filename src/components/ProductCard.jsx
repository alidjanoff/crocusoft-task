// Router
import { Link } from "react-router-dom";

// Redux-toolkit
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ data }) => {
  // Redux-toolkit
  const dispatch = useDispatch();

  return (
    <div className="productCard">
      <div className="productImg">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <Link to={`/product-details/${data.id}`}>
        <div className="productInfo">
          <h3 className="title">{data.title}</h3>
          <p className="price">{data.price}$</p>
        </div>
        <p className="desc">{data.description}</p>
      </Link>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addToCart(data));
        }}
        className="btn"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
