import { useState } from "react";

// Router
import { Link, NavLink } from "react-router-dom";

// React icons
import { FaShoppingCart, FaBars } from "react-icons/fa";

// React-toolkit
import { useSelector } from "react-redux";

// Components
import Cart from "./Cart";
const Header = () => {
  // Redux-toolkit
  const count = useSelector((state) => state.cart.count);

  // Local states
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <header className="header">
      <div
        className={`outSideClick ${menuIsOpen || cartIsOpen ? "active" : ""}`}
        onClick={() => {
          setCartIsOpen(false);
          setMenuIsOpen(false);
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              Crocu<span>Shop</span>
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="navItem">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>
          </nav>
          <div className="userArea">
            <FaBars
              className="bars"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            />
            <FaShoppingCart onClick={() => setCartIsOpen(!cartIsOpen)} />
            <span className="cartCount">{count}</span>
          </div>
          <div className={`mobileMenu ${menuIsOpen && "active"}`}>
            <div className="container">
              <nav className="mobileNavBar">
                <ul className="mobileNavList">
                  <li className="mobileNavItem">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="mobileNavItem">
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Cart active={cartIsOpen} setActive={setCartIsOpen} />
    </header>
  );
};

export default Header;
