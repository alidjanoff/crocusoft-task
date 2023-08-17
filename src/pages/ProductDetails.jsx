import { useEffect, useState } from "react";

// Router
import { useParams } from "react-router-dom";

// Redux-toolkit
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";

const ProductDetails = () => {
  // Router
  const { productID } = useParams();

  // State for swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Redux toolkit
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);

  useEffect(() => {
    dispatch(getSingleProduct(productID));
  }, [dispatch, productID]);

  return (
    <section className="productDetails">
      <div className="container">
        <div className="row">
          <div className="product">
            <div className="productImg">
              <Swiper
                loop={true}
                spaceBetween={10}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Autoplay, Thumbs]}
                className="mySwiper2"
              >
                {product.images?.map((url) => (
                  <SwiperSlide>
                    <img src={url} alt={product.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
              >
                {product.images?.map((url) => (
                  <SwiperSlide>
                    <img src={url} alt="img" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="info">
              <h2 className="title">{product.title}</h2>
              <div className="box">
                <p className="price">{product.price}$</p>
                <button
                  className="btn"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add To Cart
                </button>
              </div>
              <h3>Brand</h3>
              <p className="brand">{product.brand}</p>
              <h3>Description</h3>
              <p className="description">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
