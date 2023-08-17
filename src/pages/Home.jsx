// Router
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// React icons
import { FaArrowRight } from "react-icons/fa";

// Local images
import slideOne from "../assets/images/slide-1.jpeg";
import slideTwo from "../assets/images/slide-2.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="row">
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to CrocuShop</h1>
          <Link to="/shop">
            Go to shopping <FaArrowRight />
          </Link>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slideCard">
              <img src={slideOne} alt="slide-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideCard">
              <img src={slideTwo} alt="slide-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
