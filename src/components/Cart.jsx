// React icons
import { FaTimes } from "react-icons/fa";

// Components
import CartCard from "./CartCard";

// Redux-toolkit
import { useSelector } from "react-redux";

const Cart = ({ active, setActive }) => {
  // Redux-toolkit
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);

  return (
    <div className={`cart ${active && "active"}`}>
      <div
        onClick={() => setActive(false)}
        className={`overlay ${active && "active"}`}
      ></div>
      <div className="cartBox">
        <div className="close">
          <FaTimes onClick={() => setActive(false)} />
        </div>
        <ul className="cartList">
          {cart.length === 0 && <p className="empty">Cart is empty</p>}
          {cart.length !== 0 &&
            cart.map((item) => (
              <CartCard data={item} key={item.id} setActive={setActive} />
            ))}
        </ul>
        {cart.length !== 0 && (
          <div className="cartInfo">
            <p className="total">Total price: {total}$</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
