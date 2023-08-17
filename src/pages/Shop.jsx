import { useEffect } from "react";

// Redux-toolkit
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, getProducts } from "../redux/productSlice";

// Components
import ProductCard from "../components/ProductCard";

const Shop = () => {
  // Redux-toolkit
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const filtered = useSelector((state) => state.products.filteredData);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <div className="filter">
            <button
              className="btn"
              onClick={() => {
                dispatch(getProducts());
                dispatch(filterByCategory(""));
              }}
            >
              All
            </button>
            {[...new Set(products.map((item) => item.category))].map(
              (category, index) => (
                <button
                  key={index}
                  className="btn"
                  onClick={() => dispatch(filterByCategory(category))}
                >
                  {category}
                </button>
              )
            )}
          </div>
          <div className="productBox">
            {filtered.length !== 0
              ? filtered.map((item) => (
                  <ProductCard data={item} key={item.id} />
                ))
              : products.map((item) => (
                  <ProductCard data={item} key={item.id} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
