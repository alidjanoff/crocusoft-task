// Router
import { Link } from "react-router-dom";

// React icons
import { FaTrash } from "react-icons/fa";

// Redux-toolkit
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeProductFromCart,
} from "../redux/cartSlice";

const CartCard = ({ data, setActive }) => {
  // Redux-toolkit
  const dispatch = useDispatch();

  return (
    <div className="cartCard">
      <Link to={`/product-details/${data.id}`} onClick={() => setActive(false)}>
        <div className="cartImg">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div className="cartInfo">
          <h3 className="title">{data.title}</h3>
          <p className="price">{data.price}$</p>
        </div>
      </Link>
      <div className="quantity">
        <button
          className={`min ${data.quantity === 1 && "disabled"}`}
          onClick={() => dispatch(decrementQuantity(data.id))}
        >
          -
        </button>
        <span>{data.quantity}</span>
        <button
          className="max"
          onClick={() => dispatch(incrementQuantity(data.id))}
        >
          +
        </button>
      </div>
      <div className="remove">
        <FaTrash onClick={() => dispatch(removeProductFromCart(data.id))} />
      </div>
    </div>
  );
};

export default CartCard;
